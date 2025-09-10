import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Contact form submissions
export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  service: text("service"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Shipment tracking data
export const shipments = pgTable("shipments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  trackingNumber: text("tracking_number").notNull().unique(),
  status: text("status").notNull(),
  origin: text("origin").notNull(),
  destination: text("destination").notNull(),
  estimatedDelivery: text("estimated_delivery"),
  currentLocation: text("current_location"),
  lastUpdate: timestamp("last_update").defaultNow(),
});

// Blog posts
export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  publishedAt: timestamp("published_at").defaultNow(),
});

// Career applications
export const jobApplications = pgTable("job_applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  position: text("position").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  resume: text("resume"),
  coverLetter: text("cover_letter"),
  appliedAt: timestamp("applied_at").defaultNow(),
});

// Schema validations
export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const insertShipmentSchema = createInsertSchema(shipments).omit({
  id: true,
  lastUpdate: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  publishedAt: true,
});

export const insertJobApplicationSchema = createInsertSchema(jobApplications).omit({
  id: true,
  appliedAt: true,
});

// Types
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export type InsertShipment = z.infer<typeof insertShipmentSchema>;
export type Shipment = typeof shipments.$inferSelect;

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

export type InsertJobApplication = z.infer<typeof insertJobApplicationSchema>;
export type JobApplication = typeof jobApplications.$inferSelect;
