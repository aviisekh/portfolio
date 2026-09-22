"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Database, Code2, Cloud, Brain, Package, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: ["Ruby on Rails", "Python", "Java", "TypeScript", "GraphQL", "ReactJS", "EmberJS", "Sidekiq", "Hotwire"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "pg-vector", "Redis", "MySQL", "Pinecone"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["GCP", "AWS", "Kubernetes", "Heroku", "Docker", "CI/CD", "TDD (RSpec)", "Sentry", "New Relic", "ScoutAPM", "Coralogix"]
  },
  {
    title: "Architecture",
    icon: Package,
    skills: ["Multi-tenant SaaS", "REST & GraphQL APIs", "Distributed Systems", "Event-driven Design", "Plugin Frameworks", "SSO"]
  },
  {
    title: "AI & LLM",
    icon: Brain,
    skills: ["RAG Systems", "Embeddings & Vector Search", "Agentic Workflows", "Claude Code", "Devin", "OpenAI", "LangChain"]
  },
  {
    title: "Integrations",
    icon: Wrench,
    skills: ["Stripe", "Twilio", "Pusher", "HelloSign", "QuickBooks", "DTN", "Jira", "ClickUp", "Slack"]
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
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-3">
            <Zap className="h-8 w-8 text-primary" />
            Skills
          </h2>
          <p className="text-muted-foreground">Tools and patterns I use in production</p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={index} variants={item}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/30 group h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}