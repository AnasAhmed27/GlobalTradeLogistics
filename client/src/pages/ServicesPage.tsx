import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Ship, 
  Plane, 
  Truck, 
  Package, 
  Globe, 
  FileText, 
  Warehouse, 
  MapPin, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Anchor,
  Building,
  Gauge,
  Route
} from "lucide-react";

const mainServices = [
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective sea shipping solutions for international cargo",
    features: ["Full Container Load (FCL)", "Less than Container Load (LCL)", "Door-to-door delivery", "Consolidation services"],
    benefits: ["Most economical for large shipments", "Eco-friendly shipping option", "Suitable for heavy/oversized cargo", "Global port network"]
  },
  {
    icon: Plane,
    title: "Air Cargo",
    description: "Fast and reliable air freight for time-sensitive shipments",
    features: ["Express delivery", "Standard air freight", "Dangerous goods handling", "Temperature-controlled transport"],
    benefits: ["Fastest shipping method", "High security standards", "Excellent for high-value goods", "Priority handling available"]
  },
  {
    icon: Truck,
    title: "Land Transportation",
    description: "Comprehensive ground shipping across continents",
    features: ["Full truckload (FTL)", "Less than truckload (LTL)", "Cross-border trucking", "Last-mile delivery"],
    benefits: ["Flexible pickup/delivery", "Cost-effective for regional shipping", "Real-time GPS tracking", "Specialized vehicle options"]
  },
  {
    icon: FileText,
    title: "Customs Clearance",
    description: "Expert handling of import/export documentation and compliance",
    features: ["Documentation preparation", "Duty calculation", "Compliance verification", "Broker services"],
    benefits: ["Avoid costly delays", "Ensure regulatory compliance", "Expert knowledge of trade laws", "Streamlined process"]
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description: "Strategic storage and distribution solutions worldwide",
    features: ["Climate-controlled storage", "Inventory management", "Order fulfillment", "Cross-docking services"],
    benefits: ["Reduce inventory costs", "Improve order accuracy", "Strategic location network", "Advanced WMS technology"]
  },
  {
    icon: MapPin,
    title: "Supply Chain Management",
    description: "End-to-end supply chain optimization and visibility",
    features: ["Route optimization", "Vendor management", "Demand forecasting", "Performance analytics"],
    benefits: ["Reduce total logistics costs", "Improve delivery times", "Enhanced visibility", "Risk mitigation"]
  }
];

const specializedServices = [
  {
    icon: Gauge,
    title: "Project Cargo",
    description: "Specialized handling for oversized and heavy cargo",
    features: ["Heavy lift capabilities", "Route surveys", "Engineering support", "Specialized equipment"]
  },
  {
    icon: Building,
    title: "Exhibition Shipping",
    description: "Trade show and exhibition logistics expertise",
    features: ["Stand setup/breakdown", "Show site delivery", "Temporary import permits", "Installation support"]
  },
  {
    icon: Package,
    title: "E-commerce Fulfillment",
    description: "Complete fulfillment solutions for online retailers",
    features: ["Order processing", "Same-day shipping", "Returns management", "Multi-channel integration"]
  },
  {
    icon: Route,
    title: "Express Delivery",
    description: "Urgent shipping with guaranteed delivery times",
    features: ["Same-day delivery", "Next-day shipping", "Time-definite delivery", "Signature confirmation"]
  }
];

const industryExpertise = [
  "Automotive Parts & Vehicles",
  "Electronics & Technology",
  "Fashion & Textiles",
  "Food & Beverages",
  "Healthcare & Pharmaceuticals",
  "Industrial Machinery",
  "Oil & Gas Equipment",
  "Consumer Goods"
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive <span className="text-primary">Logistics Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From ocean freight to express delivery, we offer a complete range of shipping and 
              logistics services designed to meet your unique business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Shipping Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Professional logistics solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`main-service-${index}`}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <service.icon className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="features" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="features">Features</TabsTrigger>
                      <TabsTrigger value="benefits">Benefits</TabsTrigger>
                    </TabsList>
                    <TabsContent value="features" className="space-y-2 mt-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="benefits" className="space-y-2 mt-4">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Specialized Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Expert solutions for unique shipping requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`specialized-service-${index}`}>
                <CardHeader className="text-center">
                  <service.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our streamlined process ensures smooth shipping from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="process-step-0">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Request Quote
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Provide shipment details and get instant pricing for your cargo.
              </p>
            </div>

            <div className="text-center" data-testid="process-step-1">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Book Shipment
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Confirm your booking and we'll handle all documentation and logistics.
              </p>
            </div>

            <div className="text-center" data-testid="process-step-2">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Track Progress
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Monitor your shipment in real-time with our advanced tracking system.
              </p>
            </div>

            <div className="text-center" data-testid="process-step-3">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Delivery Complete
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Your cargo arrives safely at its destination, on time and intact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Industry Expertise
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                With over 15 years of experience, we understand the unique shipping requirements 
                of different industries. Our specialized knowledge ensures your cargo is handled 
                with the care and expertise it deserves.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {industryExpertise.map((industry, index) => (
                  <div key={index} className="flex items-center" data-testid={`industry-${index}`}>
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="bg-white dark:bg-gray-900 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 text-primary mr-2" />
                    Service Guarantees
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">On-Time Delivery</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">98% on-time delivery rate guaranteed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Cargo Protection</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Full insurance coverage for your peace of mind</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Real-Time Tracking</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">24/7 visibility of your shipment status</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Global Network</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Reliable service to 120+ countries worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
            Get a customized quote for your shipping needs today. Our experts are ready 
            to help you find the perfect logistics solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild data-testid="button-get-quote-services">
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary" asChild data-testid="button-contact-expert">
              <Link href="/contact">
                Speak with Expert
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}