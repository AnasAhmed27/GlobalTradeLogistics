import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import CountUp from "react-countup";
import { 
  Ship, 
  Truck, 
  Package, 
  Globe, 
  Clock, 
  Shield, 
  CheckCircle, 
  Phone,
  ArrowRight,
  Users,
  Award,
  TrendingUp
} from "lucide-react";



const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective sea shipping for large volumes worldwide",
    features: ["FCL & LCL options", "Door-to-door service", "Insurance coverage"]
  },
  {
    icon: Truck,
    title: "Land Transportation",
    description: "Reliable ground shipping across continents",
    features: ["Express delivery", "Temperature control", "Real-time tracking"]
  },
  {
    icon: Package,
    title: "Air Cargo",
    description: "Fast international air freight for urgent shipments",
    features: ["Next-day delivery", "Hazmat handling", "Priority processing"]
  },
  {
    icon: Globe,
    title: "Customs Clearance",
    description: "Expert handling of import/export documentation",
    features: ["Compliance assurance", "Duty optimization", "Fast processing"]
  }
];

const stats = [
  { number: 15, suffix: "+", label: "Years of Experience", icon: Award },
  { number: 50000, suffix: "+", label: "Shipments Delivered", icon: Package },
  { number: 120, suffix: "+", label: "Countries Served", icon: Globe },
  { number: 98, suffix: "%", label: "On-Time Delivery", icon: Clock }
];

const testimonials = [
  {
    quote: "Global Logistics Solutions has been our trusted shipping partner for over 5 years. Their reliability and customer service are unmatched.",
    author: "Sarah Johnson",
    company: "TechCorp Industries",
    role: "Supply Chain Manager"
  },
  {
    quote: "Thanks to their efficient customs clearance service, our import process is now 50% faster. Highly recommended!",
    author: "Michael Chen",
    company: "RetailPro Ltd",
    role: "Operations Director"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SEOHead
        title="Global Logistics Solutions - Professional Shipping & Trading Services"
        description="Expert international shipping, freight forwarding, customs clearance, and supply chain management. Track shipments, get quotes, and grow your global business with us."
        keywords="international shipping, freight forwarding, customs clearance, cargo tracking, supply chain management, import export, logistics services"
        ogTitle="Global Logistics Solutions - Your Partner in International Trade"
        ogDescription="Professional shipping and trading services worldwide. Get instant quotes, track shipments, and streamline your supply chain with our expert team."
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Global Shipping Excellence Since 2010
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Your Trusted Partner for{" "}
                <span className="text-primary">Global Logistics</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                From ocean freight to express delivery, we provide comprehensive shipping solutions 
                that connect your business to the world. Experience reliability, speed, and 
                exceptional service with every shipment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild data-testid="button-get-quote-hero">
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8" asChild data-testid="button-track-shipment-hero">
                  <Link href="/tracking">
                    Track Your Shipment
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/20 rounded-full w-80 h-80 lg:w-96 lg:h-96 mx-auto flex items-center justify-center">
                <Ship className="w-32 h-32 lg:w-40 lg:h-40 text-primary" />
              </div>
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Real-time Tracking</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">Fully Insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-12 w-12 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                <CountUp end={stat.number} duration={2} />{stat.suffix}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Shipping Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From small packages to large cargo, we offer a complete range of logistics 
              solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`service-card-${index}`}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <service.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild data-testid="button-view-all-services">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Businesses Choose Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      On-Time Delivery Guarantee
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We maintain a 98% on-time delivery rate with real-time tracking 
                      and proactive communication throughout your shipment journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Dedicated Account Management
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Each client gets a dedicated account manager who understands 
                      your business needs and provides personalized service.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Cost-Effective Solutions
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our extensive network and volume discounts allow us to offer 
                      competitive rates without compromising on service quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Full Insurance Coverage</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Complete protection for your cargo</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Every shipment is fully insured against loss, damage, and delays.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">24/7 Support</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Round-the-clock customer assistance</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Our support team is available anytime to help with your logistics needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don't just take our word for it - hear from businesses we've helped grow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 dark:bg-gray-800" data-testid={`testimonial-${index}`}>
                <CardContent className="p-8">
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Ship with Confidence?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of businesses who trust us with their logistics needs. 
            Get a free quote today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild data-testid="button-get-quote-cta">
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary" asChild data-testid="button-learn-more-cta">
              <Link href="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}