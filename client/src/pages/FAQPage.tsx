import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  HelpCircle, 
  Clock, 
  DollarSign, 
  Shield, 
  AlertTriangle,
  Package,
  Globe,
  FileText,
  Truck
} from "lucide-react";

const faqCategories = [
  {
    id: "shipping",
    title: "Shipping & Delivery",
    icon: Package,
    faqs: [
      {
        question: "How long does international shipping typically take?",
        answer: "International shipping times vary by service type and destination. Ocean freight typically takes 15-35 days, air cargo 3-7 days, and express services 1-3 days. We provide accurate estimates for each shipment based on your specific route and service level."
      },
      {
        question: "What are the size and weight limits for shipments?",
        answer: "Size and weight limits depend on the shipping method. Air cargo has stricter limits (typically up to 500kg per piece), while ocean freight can handle containers up to 40ft. For oversized or heavy cargo, we offer specialized project cargo services with no weight limits."
      },
      {
        question: "Can I track my shipment in real-time?",
        answer: "Yes! All shipments include real-time tracking with GPS location updates. You'll receive a tracking number and can monitor your shipment's progress 24/7 through our online portal or mobile app."
      },
      {
        question: "What happens if my shipment is delayed?",
        answer: "We proactively monitor all shipments and will notify you immediately of any delays. Our team works to minimize delays and provides alternative solutions when necessary. For significant delays, we offer compensation according to our service guarantee terms."
      },
      {
        question: "Do you offer same-day or next-day delivery?",
        answer: "Yes, we offer express delivery services including same-day delivery in major metropolitan areas and next-day delivery for domestic shipments. International express services are available to most destinations worldwide."
      }
    ]
  },
  {
    id: "costs",
    title: "Costs & Pricing",
    icon: DollarSign,
    faqs: [
      {
        question: "How is shipping cost calculated?",
        answer: "Shipping costs are calculated based on several factors: weight, dimensions, destination, service type, and any special handling requirements. We use dimensional weight pricing for air cargo and actual weight for ocean freight. Get an instant quote through our online calculator."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees! Our quotes include all standard charges: freight costs, fuel surcharges, and basic handling. Additional costs like customs duties, taxes, or special services (insurance, COD) are clearly itemized and explained upfront."
      },
      {
        question: "Do you offer volume discounts?",
        answer: "Yes, we offer competitive volume discounts for regular shippers and large shipments. Contact our sales team to discuss custom pricing based on your shipping volume and frequency."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, bank transfers, checks, and for established accounts, we offer net 30 payment terms. Online payments can be made securely through our customer portal."
      },
      {
        question: "Can I get a refund if I cancel my shipment?",
        answer: "Cancellation policies depend on the service type and timing. Shipments can typically be cancelled before pickup without charge. Once in transit, cancellation may incur fees. Full refunds are available for shipments cancelled within 2 hours of booking."
      }
    ]
  },
  {
    id: "customs",
    title: "Customs & Documentation",
    icon: FileText,
    faqs: [
      {
        question: "What documents are required for international shipping?",
        answer: "Required documents typically include commercial invoice, packing list, bill of lading/airway bill, and certificate of origin. Specific items may require additional permits or certificates. Our customs team will guide you through all documentation requirements."
      },
      {
        question: "Who is responsible for customs clearance?",
        answer: "We handle all customs clearance procedures as part of our service. Our licensed customs brokers manage documentation, duty payments, and regulatory compliance to ensure smooth clearance at both origin and destination."
      },
      {
        question: "How much are customs duties and taxes?",
        answer: "Customs duties and taxes vary by country, product type, and value. We provide duty estimates during quoting and can arrange for duties to be paid at destination or prepaid at origin. Our customs team helps optimize classifications to minimize costs."
      },
      {
        question: "What items are prohibited from international shipping?",
        answer: "Prohibited items vary by destination but commonly include hazardous materials, weapons, perishable foods, and certain electronics. We provide country-specific restricted items lists and can advise on shipping alternatives for borderline items."
      },
      {
        question: "How do I handle customs inspections?",
        answer: "Our customs brokers manage all inspection processes. If additional documentation is needed, we'll contact you immediately. Most inspections are routine and don't cause significant delays when proper documentation is provided."
      }
    ]
  },
  {
    id: "insurance",
    title: "Insurance & Claims",
    icon: Shield,
    faqs: [
      {
        question: "Is my shipment automatically insured?",
        answer: "Basic carrier liability is included with all shipments, but this provides limited coverage. We strongly recommend full cargo insurance, which covers the complete value of your goods against loss, damage, and theft during transit."
      },
      {
        question: "How much does cargo insurance cost?",
        answer: "Cargo insurance typically costs 0.2% to 0.5% of the shipment value, depending on the goods type and destination. High-value or fragile items may have slightly higher rates. The peace of mind is worth the small additional cost."
      },
      {
        question: "What does cargo insurance cover?",
        answer: "Full cargo insurance covers physical loss or damage from external causes during transit, including accidents, theft, weather damage, and handling damage. It does not cover delays, inherent vice, or inadequate packaging."
      },
      {
        question: "How do I file an insurance claim?",
        answer: "Contact us immediately if damage or loss is discovered. We'll guide you through the claims process, help document the damage, and work with insurers to resolve claims quickly. Most claims are settled within 30 days."
      },
      {
        question: "Are there items that cannot be insured?",
        answer: "Some high-risk items like perishables, live animals, cash, and certain antiques may have limited insurance options. We'll advise you on coverage options and risk mitigation strategies for special cargo."
      }
    ]
  },
  {
    id: "restrictions",
    title: "Restrictions & Regulations",
    icon: AlertTriangle,
    faqs: [
      {
        question: "Can I ship lithium batteries?",
        answer: "Yes, but lithium batteries have strict shipping regulations. They must be properly declared, packaged according to UN3480/UN3481 standards, and shipped via authorized carriers. Our dangerous goods specialists handle all battery shipments safely and compliantly."
      },
      {
        question: "What are the restrictions for shipping to certain countries?",
        answer: "Some countries have trade restrictions, sanctions, or special requirements. We maintain up-to-date knowledge of international trade regulations and will advise you of any restrictions that may affect your shipment."
      },
      {
        question: "How do I ship dangerous goods or hazardous materials?",
        answer: "Dangerous goods require special handling, packaging, documentation, and carrier certification. Our IATA-certified dangerous goods specialists manage the entire process to ensure safe, compliant transport of hazmat shipments."
      },
      {
        question: "Are there seasonal shipping restrictions?",
        answer: "Some destinations have seasonal restrictions, particularly for temperature-sensitive goods or during extreme weather periods. We monitor seasonal changes and will advise alternative routing or timing when necessary."
      },
      {
        question: "What about food and agricultural products?",
        answer: "Food and agricultural products often require special permits, health certificates, and may face quarantine procedures. Our specialists understand food safety regulations and work with agricultural authorities to ensure compliant shipments."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("shipping");

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              How Can We <span className="text-primary">Help You?</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Find answers to common questions about our shipping services, pricing, 
              customs procedures, and more.
            </p>

            {/* Search Box */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search-faq"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            {/* Category Tabs */}
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
              {faqCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center space-x-2"
                  data-testid={`tab-${category.id}`}
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* FAQ Content by Category */}
            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="space-y-8">
                  <div className="text-center">
                    <category.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Find answers to questions about {category.title.toLowerCase()}
                    </p>
                  </div>

                  <Card>
                    <CardContent className="p-6">
                      <Accordion type="single" collapsible className="w-full">
                        {(searchTerm ? filteredFAQs.find(c => c.id === category.id)?.faqs || [] : category.faqs).map((faq, index) => (
                          <AccordionItem key={index} value={`${category.id}-${index}`} data-testid={`faq-${category.id}-${index}`}>
                            <AccordionTrigger className="text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 dark:text-gray-300">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Get immediate help with urgent shipping questions
                </p>
                <p className="font-semibold text-primary">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Chat with our experts during business hours
                </p>
                <p className="font-semibold text-primary">Available 8AM-6PM EST</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Send us detailed questions and get expert answers
                </p>
                <p className="font-semibold text-primary">Response within 24hrs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Helpful tools and information for common shipping tasks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Package className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Tracking Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn how to track your shipments and understand status updates
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Shipping Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get instant quotes for your shipments with our online calculator
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Country Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Customs requirements and shipping information by destination
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <AlertTriangle className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Prohibited Items</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete list of restricted and prohibited items by country
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}