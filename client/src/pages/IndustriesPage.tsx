import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Smartphone, 
  Shirt, 
  Apple, 
  Pill, 
  Cog, 
  Fuel, 
  ShoppingBag,
  Factory,
  Plane,
  Building2,
  Palette,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock
} from "lucide-react";

const industries = [
  {
    icon: Car,
    title: "Automotive",
    description: "Specialized handling of vehicles, parts, and automotive equipment worldwide",
    features: [
      "Vehicle shipping (cars, motorcycles, boats)",
      "Auto parts and components",
      "Just-in-time delivery for production lines",
      "Roll-on/Roll-off (RoRo) services"
    ],
    specializations: [
      "Temperature-controlled transport for batteries",
      "Hazmat handling for automotive chemicals",
      "Oversized cargo for heavy machinery",
      "Assembly line coordination"
    ],
    stats: { clients: "150+", shipments: "12,000+", countries: "45+" }
  },
  {
    icon: Smartphone,
    title: "Electronics & Technology",
    description: "Secure shipping for high-value electronics and sensitive technology products",
    features: [
      "Anti-static packaging and handling",
      "High-security transport",
      "Temperature and humidity control",
      "Express delivery options"
    ],
    specializations: [
      "Lithium battery compliance",
      "ESD-safe handling procedures",
      "Insurance for high-value goods",
      "White glove delivery service"
    ],
    stats: { clients: "200+", shipments: "25,000+", countries: "60+" }
  },
  {
    icon: Shirt,
    title: "Fashion & Textiles",
    description: "Fast fashion logistics with seasonal demand management and quality preservation",
    features: [
      "Garment hanging systems",
      "Seasonal volume management",
      "Quality inspection services",
      "Express air freight for trends"
    ],
    specializations: [
      "Garment-on-hanger (GOH) systems",
      "Climate-controlled storage",
      "Fashion week logistics",
      "Sustainable packaging options"
    ],
    stats: { clients: "300+", shipments: "18,000+", countries: "55+" }
  },
  {
    icon: Apple,
    title: "Food & Beverages",
    description: "Cold chain logistics ensuring freshness and compliance with food safety standards",
    features: [
      "Temperature-controlled transport",
      "Cold storage facilities",
      "HACCP compliance",
      "Expedited customs clearance"
    ],
    specializations: [
      "Frozen and fresh food handling",
      "Alcohol shipping regulations",
      "Organic certification maintenance",
      "Perishable goods prioritization"
    ],
    stats: { clients: "120+", shipments: "8,000+", countries: "35+" }
  },
  {
    icon: Pill,
    title: "Healthcare & Pharmaceuticals",
    description: "Regulated shipping for medical devices, pharmaceuticals, and health products",
    features: [
      "GDP-compliant cold chain",
      "Controlled substance handling",
      "Medical device logistics",
      "Emergency shipment services"
    ],
    specializations: [
      "Pharmaceutical cold chain validation",
      "Clinical trial logistics",
      "Medical emergency shipments",
      "Regulatory documentation"
    ],
    stats: { clients: "80+", shipments: "5,000+", countries: "25+" }
  },
  {
    icon: Cog,
    title: "Industrial Machinery",
    description: "Heavy lift and project cargo solutions for industrial equipment and machinery",
    features: [
      "Heavy lift capabilities",
      "Project cargo management",
      "Installation coordination",
      "Route surveys and permits"
    ],
    specializations: [
      "Oversized cargo handling",
      "Multi-modal transport solutions",
      "Engineering support",
      "Site delivery coordination"
    ],
    stats: { clients: "90+", shipments: "3,500+", countries: "40+" }
  },
  {
    icon: Fuel,
    title: "Oil & Gas",
    description: "Specialized logistics for energy sector equipment and hazardous materials",
    features: [
      "Hazmat certified transport",
      "Offshore logistics",
      "Pipeline equipment shipping",
      "Emergency response services"
    ],
    specializations: [
      "Dangerous goods classification",
      "Offshore platform supply",
      "Remote location delivery",
      "Environmental compliance"
    ],
    stats: { clients: "60+", shipments: "2,200+", countries: "30+" }
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Retail",
    description: "Fulfillment solutions for online retailers and omnichannel commerce",
    features: [
      "Order fulfillment services",
      "Returns management",
      "Last-mile delivery",
      "Peak season support"
    ],
    specializations: [
      "Same-day delivery options",
      "Multi-channel integration",
      "Inventory management",
      "Customer experience optimization"
    ],
    stats: { clients: "500+", shipments: "50,000+", countries: "70+" }
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Industry Expertise",
    description: "Deep understanding of sector-specific requirements and regulations"
  },
  {
    icon: Shield,
    title: "Compliance Assurance",
    description: "Full regulatory compliance for industry standards and international trade"
  },
  {
    icon: Clock,
    title: "Specialized Handling",
    description: "Tailored solutions for unique cargo requirements and delivery needs"
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Industries We Serve
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Specialized Logistics for <span className="text-primary">Every Industry</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From automotive to pharmaceuticals, we understand the unique shipping requirements 
              of your industry and provide tailored solutions that ensure compliance, efficiency, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Industry Specialization Matters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Generic shipping solutions don't work for specialized industries. We provide expertise that makes the difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Specialized solutions for the world's most demanding industries
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`industry-${index}`}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <industry.icon className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{industry.title}</CardTitle>
                      <CardDescription>{industry.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Core Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Core Services</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {industry.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specializations */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Specializations</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {industry.specializations.map((spec, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">Track Record</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary">{industry.stats.clients}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">Clients</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">{industry.stats.shipments}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">Shipments</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-primary">{industry.stats.countries}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">Countries</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industry Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              How we've helped businesses in different industries overcome logistics challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
              <CardHeader>
                <Car className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Automotive Manufacturer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Reduced supply chain costs by 25% through optimized just-in-time delivery for a major automotive manufacturer.
                </p>
                <div className="text-sm">
                  <strong className="text-blue-600">Result:</strong> $2M annual savings
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">Tech Startup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Enabled global expansion for a tech startup with secure, compliant shipping of high-value electronics.
                </p>
                <div className="text-sm">
                  <strong className="text-green-600">Result:</strong> 300% growth in international sales
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700">
              <CardHeader>
                <Pill className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">Pharmaceutical Company</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Maintained cold chain integrity for critical medications across 15 countries with 99.9% success rate.
                </p>
                <div className="text-sm">
                  <strong className="text-purple-600">Result:</strong> Zero product loss
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Certifications */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industry Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Fully certified to handle specialized cargo across all major industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">IATA Dangerous Goods</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Certified for hazardous materials transport</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Pill className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GDP Certified</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Good Distribution Practice for pharmaceuticals</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Apple className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">HACCP Compliant</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Food safety management system certified</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">C-TPAT Certified</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Customs-Trade Partnership Against Terrorism</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Optimize Your Industry's Logistics?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our industry experts design a customized logistics solution that meets your 
            specific requirements and drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild data-testid="button-industry-consultation">
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary" asChild data-testid="button-view-services">
              <Link href="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}