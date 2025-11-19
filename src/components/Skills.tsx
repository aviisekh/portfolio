"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Zap, Database, Code2, Cloud, Brain, Package, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: ["Ruby on Rails", "Python", "Java", "GraphQL", "ReactJs", "ViteJs", "EmberJs", "jQuery", "Hotwire", "React Native"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "pg-vector", "Redis"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "GCP", "Heroku", "Docker", "CI/CD", "TDD (Rspec)", "Coralogix", "ScoutAPM"]
  },
  {
    title: "AI & Development Tools",
    icon: Brain,
    skills: ["OpenAI", "Langchain", "Cursor", "Co-Pilot", "Devin", "Codex"]
  },
  {
    title: "Other Technologies",
    icon: Package,
    skills: ["Twilio", "HelloSign", "Pusher", "Stripe", "Linux", "Vim", "Trello", "Jira", "ClickUp", "Linear"]
  }
];

const accomplishments = [
  {
    icon: DollarSign,
    title: "Saved $3,800 per month",
    description: "Reduced server costs from $5,000 to $1,200 per month by implementing background works optimization and backend improvements",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/10"
  },
  {
    icon: TrendingUp,
    title: "30% improved query efficiency",
    description: "Enhanced query performance by reducing n+1 queries, identifying pagination needs in Frontend, and developing database views",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Database,
    title: "Legacy to Modern Migration",
    description: "Migrated existing system from Rails 4 with multiple schema-based multi-tenant architecture to Rails 6 with single schema-based multi-tenant architecture",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10"
  }
];

const strengths = [
  { name: "Full Stack Development", icon: Code2 },
  { name: "Multi-tenant Architecture Design", icon: Database },
  { name: "Database Optimization", icon: TrendingUp },
  { name: "AI Development & LLM Integration", icon: Brain },
  { name: "Workflow Automation & AI-Powered Tools", icon: Wrench },
  { name: "Systems Integration and Debugging", icon: Package },
  { name: "CI/CD Pipeline Management", icon: Cloud },
  { name: "Leadership and Team Management", icon: Zap }
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
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground">Technical skills and key accomplishments</p>
        </motion.div>

        {/* Accomplishments */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {accomplishments.map((accomplishment, index) => {
            const Icon = accomplishment.icon;
            return (
              <motion.div key={index} variants={item}>
                <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 group">
                  <CardContent className="pt-6">
                    <div className={`inline-flex p-3 rounded-lg ${accomplishment.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-10 w-10 ${accomplishment.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{accomplishment.title}</h3>
                    <p className="text-sm text-muted-foreground">{accomplishment.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
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

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                Core Strengths
              </CardTitle>
              <CardDescription>Areas of expertise and focus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {strengths.map((strength, index) => {
                  const Icon = strength.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <Icon className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{strength.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}