import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CountUp from "react-countup";
import {
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Award,
  Calendar,
  Building,
  Handshake,
  TrendingUp
} from "lucide-react";

const milestones = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Started as a small freight forwarding company with a vision to connect businesses globally."
  },
  {
    year: "2013",
    title: "International Expansion",
    description: "Opened offices in major ports across Asia and Europe, expanding our global network."
  },
  {
    year: "2016",
    title: "Technology Integration",
    description: "Launched our proprietary tracking system and digital platform for enhanced customer experience."
  },
  {
    year: "2019",
    title: "50,000th Shipment",
    description: "Celebrated a major milestone of successfully delivering 50,000+ shipments worldwide."
  },
  {
    year: "2022",
    title: "Sustainability Initiative",
    description: "Implemented green logistics practices and carbon-neutral shipping options."
  },
  {
    year: "2025",
    title: "AI-Powered Logistics",
    description: "Integrated AI and machine learning for route optimization and predictive analytics."
  }
];

const values = [
  {
    icon: Handshake,
    title: "Reliability",
    description: "We keep our promises and deliver on time, every time. Your trust is our foundation."
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description: "Every decision we make puts our customers' needs first. Your success is our success."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "With partners worldwide, we ensure seamless shipping to every corner of the globe."
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We continuously invest in technology and processes to improve our services."
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Our diverse, skilled team works together to solve complex logistics challenges."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, exceeding expectations."
  }
];

const leadership = [
  {
    name: "Michael Rodriguez",
    position: "Chief Executive Officer",
    experience: "20+ years in international logistics",
    background: "Former VP of Operations at major shipping conglomerate"
  },
  {
    name: "Sarah Chen",
    position: "Chief Operations Officer",
    experience: "15+ years in supply chain management",
    background: "Expert in freight forwarding and customs clearance"
  },
  {
    name: "David Thompson",
    position: "Chief Technology Officer",
    experience: "12+ years in logistics technology",
    background: "Led digital transformation at Fortune 500 logistics companies"
  },
  {
    name: "Lisa Wang",
    position: "Chief Financial Officer",
    experience: "18+ years in corporate finance",
    background: "Former CFO at international trading company"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              About Global Logistics Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Connecting Businesses <span className="text-primary">Worldwide</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been the trusted logistics partner for businesses of all sizes,
              providing reliable, efficient, and cost-effective shipping solutions across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  Global Logistics Solutions was founded in 2010 with a simple yet ambitious goal:
                  to make international shipping accessible, reliable, and affordable for businesses
                  of all sizes. What started as a small freight forwarding company has grown into
                  a comprehensive logistics provider serving over 120 countries worldwide.
                </p>
                <p className="text-lg leading-relaxed">
                  Our journey began when our founder, Michael Rodriguez, recognized the challenges
                  that small and medium businesses faced when trying to ship internationally.
                  Complex regulations, high costs, and unreliable service were common barriers.
                  We set out to change that by building a company that prioritizes transparency,
                  efficiency, and customer success.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're proud to be a trusted partner for thousands of businesses, from
                  e-commerce startups to multinational corporations. Our success is measured not
                  just by the number of shipments we handle, but by the growth and success of
                  our clients' businesses.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    <CountUp end={25} duration={2} />+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Global Offices</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    <CountUp end={500} duration={2} />+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Team Members</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    <CountUp end={120} duration={2} />+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Countries Served</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    <CountUp end={15} duration={2} />+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Industry Awards</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To empower businesses of all sizes to reach global markets through reliable,
                  efficient, and innovative logistics solutions that drive growth and success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the world's most trusted logistics partner, connecting every business
                  to global opportunities through technology-driven, sustainable shipping solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Promise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every shipment matters. We promise to treat your cargo with the same care and
                  urgency as our own, ensuring it reaches its destination safely and on time.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`value-${index}`}>
                <CardHeader className="text-center">
                  <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in our growth and evolution
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6" data-testid={`milestone-${index}`}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold">
                    <Calendar className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <Badge variant="outline" className="text-primary border-primary">
                      {milestone.year}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experienced leaders driving our vision forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`leader-${index}`}>
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{leader.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <p>{leader.experience}</p>
                    <p className="italic">{leader.background}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Awards
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Recognition of our commitment to excellence and quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">ISO 9001:2015</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Quality Management Systems</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">C-TPAT Certified</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Customs-Trade Partnership</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">IATA Accredited</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Air Cargo Agent</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">FMC Licensed</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Ocean Transportation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}