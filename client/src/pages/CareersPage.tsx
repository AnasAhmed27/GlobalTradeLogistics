import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertJobApplicationSchema } from "@shared/schema";
import { 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp,
  Award,
  Heart,
  Globe,
  Send,
  Briefcase,
  GraduationCap,
  DollarSign
} from "lucide-react";
import type { InsertJobApplication } from "@shared/schema";

const openPositions = [
  {
    title: "Senior Logistics Coordinator",
    department: "Operations",
    location: "New York, NY",
    type: "Full-time",
    description: "Lead international shipping operations and coordinate with global partners to ensure smooth cargo movement.",
    requirements: ["5+ years logistics experience", "Bachelor's degree", "International trade knowledge", "Strong communication skills"],
    salary: "$75,000 - $90,000"
  },
  {
    title: "Customs Broker",
    department: "Compliance",
    location: "Los Angeles, CA",
    type: "Full-time", 
    description: "Handle customs clearance procedures and ensure compliance with international trade regulations.",
    requirements: ["Licensed customs broker", "3+ years experience", "Knowledge of HTS codes", "Detail-oriented"],
    salary: "$65,000 - $80,000"
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    description: "Drive new business growth by developing relationships with potential clients in various industries.",
    requirements: ["Sales experience in logistics", "Strong networking skills", "CRM proficiency", "Travel availability"],
    salary: "$80,000 - $120,000 + Commission"
  },
  {
    title: "Supply Chain Analyst",
    department: "Analytics",
    location: "Chicago, IL",
    type: "Full-time",
    description: "Analyze supply chain data to optimize routes, reduce costs, and improve delivery performance.",
    requirements: ["Data analysis skills", "Excel/SQL proficiency", "Supply chain knowledge", "Problem-solving abilities"],
    salary: "$60,000 - $75,000"
  },
  {
    title: "Customer Service Representative",
    department: "Customer Support",
    location: "Multiple Locations",
    type: "Full-time",
    description: "Provide exceptional customer support and assist clients with their shipping needs and inquiries.",
    requirements: ["Customer service experience", "Multi-lingual preferred", "Problem-solving skills", "Patience and empathy"],
    salary: "$40,000 - $50,000"
  },
  {
    title: "Warehouse Operations Supervisor",
    department: "Warehouse",
    location: "Miami, FL",
    type: "Full-time",
    description: "Supervise warehouse operations including receiving, storage, and shipping of international cargo.",
    requirements: ["Warehouse management experience", "Leadership skills", "WMS knowledge", "Safety certification"],
    salary: "$55,000 - $65,000"
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, vision, and wellness programs"
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Competitive salaries, performance bonuses, and profit-sharing opportunities"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible schedules, remote work options, and generous PTO policy"
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Training programs, certifications, and tuition reimbursement"
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "International assignments and career advancement across our global network"
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Collaborative environment with team events and recognition programs"
  }
];

export default function CareersPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedPosition, setSelectedPosition] = useState("");

  const form = useForm<InsertJobApplication>({
    resolver: zodResolver(insertJobApplicationSchema),
    defaultValues: {
      position: "",
      name: "",
      email: "",
      phone: "",
      resume: "",
      coverLetter: ""
    }
  });

  const mutation = useMutation({
    mutationFn: (data: InsertJobApplication) => 
      fetch("/api/careers/apply", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json()),
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. We'll review your application and get back to you soon."
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/careers/apply"] });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit application. Please try again."
      });
    }
  });

  const onSubmit = async (data: InsertJobApplication) => {
    await mutation.mutateAsync(data);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Join Our Team
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Build Your Career in <span className="text-primary">Global Logistics</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join a team of logistics professionals who are passionate about connecting businesses 
              worldwide. Grow your career with opportunities for advancement and international experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Global Logistics Solutions?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We invest in our people because they are our greatest asset
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`benefit-${index}`}>
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Current Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find your next opportunity with our growing team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`position-${index}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <CardDescription className="text-base mt-1">{position.department}</CardDescription>
                    </div>
                    <Badge variant="outline">{position.type}</Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{position.salary}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {position.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    onClick={() => {
                      setSelectedPosition(position.title);
                      form.setValue("position", position.title);
                      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full"
                    data-testid={`apply-${index}`}
                  >
                    Apply for this Position
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Briefcase className="h-6 w-6 mr-2 text-primary" />
                Submit Your Application
              </CardTitle>
              <CardDescription>
                Ready to join our team? Fill out the application form below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position Applying For *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Select a position above or enter position title" 
                            {...field}
                            value={selectedPosition || field.value}
                            onChange={(e) => {
                              field.onChange(e);
                              setSelectedPosition(e.target.value);
                            }}
                            data-testid="input-position"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                              data-testid="input-applicant-name"
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
                              placeholder="john@email.com" 
                              {...field} 
                              data-testid="input-applicant-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

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
                            value={field.value || ""}
                            data-testid="input-applicant-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="resume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resume/CV Link</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Link to your resume (Google Drive, Dropbox, etc.)" 
                            {...field}
                            value={field.value || ""}
                            data-testid="input-resume"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="coverLetter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cover Letter</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                            rows={6}
                            {...field}
                            value={field.value || ""}
                            data-testid="textarea-cover-letter"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={mutation.isPending}
                    data-testid="button-submit-application"
                  >
                    {mutation.isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Company Culture
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              What it's like to work at Global Logistics Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Growth Mindset</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe in continuous learning and provide opportunities for professional 
                  development and career advancement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Collaborative Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Work with passionate professionals from diverse backgrounds who share 
                  a common goal of excellence in logistics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Recognition & Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We recognize and reward outstanding performance with competitive 
                  compensation and comprehensive benefits.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}