import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertJobApplicationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Shipment tracking routes
  app.get("/api/shipments/track/:trackingNumber", async (req, res) => {
    try {
      const { trackingNumber } = req.params;
      const shipment = await storage.getShipmentByTrackingNumber(trackingNumber);
      
      if (!shipment) {
        return res.status(404).json({ error: "Shipment not found" });
      }
      
      res.json(shipment);
    } catch (error) {
      console.error("Error fetching shipment:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json(contact);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid data", details: error.errors });
      }
      console.error("Error creating contact:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Blog posts
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Job applications
  app.post("/api/careers/apply", async (req, res) => {
    try {
      const validatedData = insertJobApplicationSchema.parse(req.body);
      const application = await storage.createJobApplication(validatedData);
      res.status(201).json(application);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid data", details: error.errors });
      }
      console.error("Error creating job application:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
