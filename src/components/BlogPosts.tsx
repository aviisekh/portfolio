"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowUpRight, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable Multi-Tenant Architectures with Rails",
    excerpt: "A deep dive into designing and implementing secure, performant multi-tenant systems that can scale to thousands of clients.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Ruby on Rails", "Architecture", "Scalability"],
    url: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
  },
  {
    title: "AI-Powered Development: Integrating LLMs into Your Workflow",
    excerpt: "How modern AI tools like Cursor and Co-Pilot are revolutionizing software development and practical tips for integration.",
    date: "2023-12-08",
    readTime: "6 min read",
    tags: ["AI", "Productivity", "OpenAI"],
    url: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    title: "Optimizing PostgreSQL: From Slow Queries to Lightning Fast",
    excerpt: "Real-world strategies for database optimization, including n+1 query elimination and leveraging pg-vector for AI applications.",
    date: "2023-11-20",
    readTime: "10 min read",
    tags: ["PostgreSQL", "Performance", "Database"],
    url: "#",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80"
  },
  {
    title: "Cost Optimization in Cloud Infrastructure: A Case Study",
    excerpt: "How I reduced server costs by 76% while maintaining performance through strategic optimization and infrastructure redesign.",
    date: "2023-10-05",
    readTime: "7 min read",
    tags: ["DevOps", "AWS", "Cost Optimization"],
    url: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    title: "RAG Systems: Building Intelligent Search with Vector Embeddings",
    excerpt: "A practical guide to implementing Retrieval-Augmented Generation systems using pg-vector and modern AI frameworks.",
    date: "2023-09-18",
    readTime: "12 min read",
    tags: ["AI", "RAG", "Vector Search"],
    url: "#",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
  },
  {
    title: "Modern CI/CD Pipelines: Best Practices and Automation",
    excerpt: "Setting up robust continuous integration and deployment workflows that improve team productivity and code quality.",
    date: "2023-08-25",
    readTime: "9 min read",
    tags: ["CI/CD", "DevOps", "Automation"],
    url: "#",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function BlogPosts() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            Blog Posts
          </h2>
          <p className="text-muted-foreground">Insights, tutorials, and thoughts on software engineering</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 group overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader className="flex-grow">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full group/button hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      Read Article
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Posts
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
