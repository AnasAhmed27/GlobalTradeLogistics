import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  ArrowLeft, 
  Share, 
  Clock,
  User,
  Tag,
  FileText
} from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const { slug } = useParams();

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['/api/blog', slug],
    enabled: !!slug
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Article Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The article you're looking for doesn't exist or may have been moved.
          </p>
          <Button asChild data-testid="button-back-to-blog">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild data-testid="button-back">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Articles
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt!).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Global Logistics Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none dark:prose-invert" data-testid="article-content">
                <p>{post.content}</p>
                
                {/* Sample expanded content based on the post */}
                {post.slug === "international-shipping-regulations-2025" && (
                  <div className="mt-8 space-y-6">
                    <h2>Key Regulatory Changes for 2025</h2>
                    <p>
                      The international shipping landscape continues to evolve with new regulations 
                      aimed at improving security, environmental protection, and trade facilitation. 
                      Understanding these changes is crucial for maintaining compliant and efficient 
                      supply chains.
                    </p>
                    
                    <h3>1. Enhanced Security Requirements</h3>
                    <p>
                      New security protocols require additional documentation and screening procedures 
                      for certain destinations. This includes enhanced cargo screening and improved 
                      chain of custody documentation.
                    </p>

                    <h3>2. Environmental Compliance</h3>
                    <p>
                      Stricter environmental regulations are being implemented globally, including 
                      carbon emission reporting requirements and restrictions on packaging materials.
                    </p>

                    <h3>3. Digital Documentation Standards</h3>
                    <p>
                      Many countries are moving towards fully digital customs procedures, requiring 
                      shippers to adapt their documentation processes accordingly.
                    </p>
                  </div>
                )}

                {post.slug === "supply-chain-optimization-reduce-costs" && (
                  <div className="mt-8 space-y-6">
                    <h2>Proven Strategies for Cost Reduction</h2>
                    <p>
                      Supply chain optimization isn't just about reducing costs—it's about creating 
                      a more resilient, efficient, and responsive logistics network that can adapt 
                      to changing market conditions.
                    </p>
                    
                    <h3>1. Route Optimization</h3>
                    <p>
                      Advanced analytics can identify the most efficient shipping routes, taking into 
                      account factors like fuel costs, transit times, and customs processing speeds.
                    </p>

                    <h3>2. Inventory Management</h3>
                    <p>
                      Strategic inventory placement reduces both storage costs and shipping distances, 
                      improving delivery times while cutting expenses.
                    </p>

                    <h3>3. Technology Integration</h3>
                    <p>
                      Modern logistics technology provides real-time visibility and predictive 
                      analytics that help prevent costly disruptions and delays.
                    </p>
                  </div>
                )}

                {post.slug === "future-ecommerce-logistics-trends" && (
                  <div className="mt-8 space-y-6">
                    <h2>Emerging Trends Shaping E-commerce Logistics</h2>
                    <p>
                      The e-commerce boom has fundamentally changed customer expectations around 
                      shipping speed and transparency. Here are the key trends shaping the future 
                      of e-commerce logistics.
                    </p>
                    
                    <h3>1. Same-Day and Ultra-Fast Delivery</h3>
                    <p>
                      Consumer demand for immediate gratification is driving innovation in last-mile 
                      delivery, including drone delivery, autonomous vehicles, and micro-fulfillment centers.
                    </p>

                    <h3>2. Sustainable Packaging</h3>
                    <p>
                      Environmental consciousness is pushing the industry towards sustainable packaging 
                      solutions and carbon-neutral shipping options.
                    </p>

                    <h3>3. Predictive Analytics</h3>
                    <p>
                      AI and machine learning are enabling more accurate demand forecasting and 
                      proactive inventory management.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation to Blog */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Continue Reading
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Explore more shipping and logistics insights
          </p>
          <Button asChild data-testid="button-more-articles">
            <Link href="/blog">
              View All Articles
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}