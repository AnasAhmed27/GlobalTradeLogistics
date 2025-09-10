import { 
  type Contact, 
  type InsertContact,
  type Shipment,
  type InsertShipment,
  type BlogPost,
  type InsertBlogPost,
  type JobApplication,
  type InsertJobApplication
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contact form methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Shipment tracking methods
  createShipment(shipment: InsertShipment): Promise<Shipment>;
  getShipmentByTrackingNumber(trackingNumber: string): Promise<Shipment | undefined>;
  updateShipmentStatus(trackingNumber: string, status: string, currentLocation?: string): Promise<Shipment | undefined>;
  
  // Blog methods
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  
  // Job application methods
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
  getJobApplications(): Promise<JobApplication[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private shipments: Map<string, Shipment>;
  private blogPosts: Map<string, BlogPost>;
  private jobApplications: Map<string, JobApplication>;

  constructor() {
    this.contacts = new Map();
    this.shipments = new Map();
    this.blogPosts = new Map();
    this.jobApplications = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private async initializeSampleData() {
    // Sample shipments for tracking demo
    const sampleShipments: InsertShipment[] = [
      {
        trackingNumber: "GLS001234567",
        status: "In Transit",
        origin: "Shanghai, China",
        destination: "Los Angeles, USA",
        estimatedDelivery: "2025-09-15",
        currentLocation: "Hong Kong"
      },
      {
        trackingNumber: "GLS007890123",
        status: "Delivered",
        origin: "Hamburg, Germany",
        destination: "New York, USA",
        estimatedDelivery: "2025-09-08",
        currentLocation: "New York Port"
      },
      {
        trackingNumber: "GLS004567890",
        status: "Customs Clearance",
        origin: "Tokyo, Japan",
        destination: "Seattle, USA",
        estimatedDelivery: "2025-09-18",
        currentLocation: "Seattle Customs"
      }
    ];

    for (const shipment of sampleShipments) {
      await this.createShipment(shipment);
    }

    // Sample blog posts
    const sampleBlogPosts: InsertBlogPost[] = [
      {
        title: "Understanding International Shipping Regulations in 2025",
        slug: "international-shipping-regulations-2025",
        excerpt: "Stay compliant with the latest international shipping regulations and avoid costly delays.",
        content: "International shipping regulations continue to evolve in 2025...",
        category: "Regulations"
      },
      {
        title: "How Supply Chain Optimization Can Reduce Shipping Costs",
        slug: "supply-chain-optimization-reduce-costs",
        excerpt: "Learn proven strategies to optimize your supply chain and cut shipping expenses.",
        content: "Supply chain optimization is crucial for businesses looking to reduce costs...",
        category: "Supply Chain"
      },
      {
        title: "The Future of E-commerce Logistics: Trends to Watch",
        slug: "future-ecommerce-logistics-trends",
        excerpt: "Discover the emerging trends shaping the future of e-commerce logistics.",
        content: "E-commerce logistics is rapidly evolving with new technologies...",
        category: "E-commerce"
      }
    ];

    for (const post of sampleBlogPosts) {
      await this.createBlogPost(post);
    }
  }

  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact,
      phone: insertContact.phone || null,
      company: insertContact.company || null,
      service: insertContact.service || null,
      id, 
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  // Shipment methods
  async createShipment(insertShipment: InsertShipment): Promise<Shipment> {
    const id = randomUUID();
    const shipment: Shipment = { 
      ...insertShipment,
      estimatedDelivery: insertShipment.estimatedDelivery || null,
      currentLocation: insertShipment.currentLocation || null,
      id, 
      lastUpdate: new Date()
    };
    this.shipments.set(insertShipment.trackingNumber, shipment);
    return shipment;
  }

  async getShipmentByTrackingNumber(trackingNumber: string): Promise<Shipment | undefined> {
    return this.shipments.get(trackingNumber);
  }

  async updateShipmentStatus(trackingNumber: string, status: string, currentLocation?: string): Promise<Shipment | undefined> {
    const shipment = this.shipments.get(trackingNumber);
    if (shipment) {
      shipment.status = status;
      if (currentLocation) {
        shipment.currentLocation = currentLocation;
      }
      shipment.lastUpdate = new Date();
      this.shipments.set(trackingNumber, shipment);
    }
    return shipment;
  }

  // Blog methods
  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = { 
      ...insertPost, 
      id, 
      publishedAt: new Date()
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .sort((a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime());
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  // Job application methods
  async createJobApplication(insertApplication: InsertJobApplication): Promise<JobApplication> {
    const id = randomUUID();
    const application: JobApplication = { 
      ...insertApplication,
      phone: insertApplication.phone || null,
      resume: insertApplication.resume || null,
      coverLetter: insertApplication.coverLetter || null,
      id, 
      appliedAt: new Date()
    };
    this.jobApplications.set(id, application);
    return application;
  }

  async getJobApplications(): Promise<JobApplication[]> {
    return Array.from(this.jobApplications.values());
  }
}

export const storage = new MemStorage();
