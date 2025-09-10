import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building,
  Users,
  Globe,
  Headphones
} from "lucide-react";
import type { InsertContact } from "@shared/schema";

const services = [
  "Ocean Freight",
  "Air Cargo", 
  "Land Transportation",
  "Customs Clearance",
  "Warehousing",
  "Supply Chain Management",
  "Project Cargo",
  "Express Delivery",
  "Other"
];

const offices = [
  {
    city: "New York",
    country: "USA",
    address: "123 Harbor View Drive, New York, NY 10004",
    phone: "+1 (555) 123-4567",
    email: "newyork@globallogistics.com",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM EST"
  },
  {
    city: "Los Angeles", 
    country: "USA",
    address: "456 Pacific Coast Highway, Los Angeles, CA 90210",
    phone: "+1 (555) 987-6543",
    email: "losangeles@globallogistics.com",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM PST"
  },
  {
    city: "London",
    country: "UK", 
    address: "789 Thames Business Park, London E14 9SH, UK",
    phone: "+44 20 7123 4567",
    email: "london@globallogistics.com",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT"
  },
  {
    city: "Shanghai",
    country: "China",
    address: "321 Pudong International Plaza, Shanghai 200120, China",
    phone: "+86 21 1234 5678",
    email: "shanghai@globallogistics.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM CST"
  }
];

export default function ContactPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: (data: InsertContact) => apiRequest("/api/contacts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours."
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again."
      });
    }
  });

  const onSubmit = async (data: InsertContact) => {
    setIsSubmitting(true);
    try {
      await mutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to ship with confidence? Our logistics experts are here to help you find 
              the perfect solution for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                {...field} 
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="john@company.com" 
                                {...field} 
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+1 (555) 123-4567" 
                                {...field} 
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="ABC Corporation" 
                                {...field} 
                                data-testid="input-company"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interested In</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-service">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your shipping needs..."
                              rows={6}
                              {...field} 
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                      data-testid="button-submit-contact"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Headphones className="h-6 w-6 mr-2 text-primary" />
                    Quick Contact
                  </CardTitle>
                  <CardDescription>
                    Need immediate assistance? Reach out to us directly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">24/7 Support Hotline</p>
                      <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">General Inquiries</p>
                      <p className="text-gray-600 dark:text-gray-300">info@globallogistics.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Business Hours</p>
                      <p className="text-gray-600 dark:text-gray-300">Mon-Fri: 8:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-700 dark:text-red-300">Emergency Shipment Support</CardTitle>
                  <CardDescription className="text-red-600 dark:text-red-400">
                    For urgent shipment issues or emergencies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-red-700 dark:text-red-300">Emergency Hotline: +1 (555) 911-SHIP</p>
                    <p className="text-sm text-red-600 dark:text-red-400">Available 24/7 for critical shipment issues</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Global Office Network
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              With offices worldwide, we're always close to your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`office-${index}`}>
                <CardHeader>
                  <CardTitle className="text-lg">{office.city}</CardTitle>
                  <CardDescription>{office.country}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 dark:text-gray-300">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <p className="text-sm text-gray-600 dark:text-gray-300">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <p className="text-sm text-gray-600 dark:text-gray-300">{office.email}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="text-sm text-gray-600 dark:text-gray-300">{office.hours}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experience the difference of working with logistics experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Dedicated Account Manager</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get personalized service with a dedicated account manager who understands your business needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Global Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Leverage our worldwide network of partners and offices for seamless international shipping.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Industry Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Benefit from 15+ years of experience and deep knowledge across multiple industries.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}