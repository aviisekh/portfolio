"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Layers, Puzzle, Brain, Gauge, Mail, Truck } from "lucide-react";

const projects = [
  {
    title: "Droplets — Plugin Integration Framework",
    context: "Fluid Commerce · 2024–2025",
    icon: Puzzle,
    problem:
      "Every customer wanted their own back-office tool (QuickBooks and others) wired into the platform, and each bespoke integration added coupling to the core app.",
    approach:
      "Designed an open-source, installable plugin system. Each droplet is an autonomous service with its own database that owns its logs, callbacks, and field-mapping logic, behind a published spec.",
    outcome:
      "Integrations moved out of the monolith, and third-party vendors can now build their own droplets against the spec.",
    stack: ["Rails", "PostgreSQL", "Service design", "Public API spec"],
  },
  {
    title: "Production RAG Chatbot",
    context: "Fluid Commerce · 2024–2025",
    icon: Brain,
    problem:
      "Customers needed an AI assistant grounded in their own constantly changing catalogue and content, not generic LLM answers.",
    approach:
      "Built the full pipeline: pg-vector embedding storage, retrieval logic, and an automated refresh strategy using debounced Sidekiq jobs so bursts of edits don't trigger redundant re-embedding.",
    outcome: "Shipped to production as a pro-tier, revenue-bearing feature.",
    stack: ["pg-vector", "PostgreSQL", "Sidekiq", "OpenAI", "Rails"],
  },
  {
    title: "Cutting Infrastructure Spend by 76%",
    context: "FleetPanda · 2019–2022",
    icon: Gauge,
    problem: "Heroku costs had grown to $5,000/month while the most-used views were getting slower.",
    approach:
      "Profiled with ScoutAPM, New Relic, and Coralogix; removed N+1 queries, tuned slow queries and APIs, added database views and pagination, and gave the frontend team structured feedback on excessive call patterns.",
    outcome: "Server costs fell to $1,200/month and database performance improved by 30%.",
    stack: ["PostgreSQL", "Heroku", "APM", "Query tuning"],
  },
  {
    title: "Real-time Petroleum Logistics Platform",
    context: "FleetPanda · 2019–2022",
    icon: Truck,
    problem:
      "Fuel distributors ran dispatch, invoicing, and driver management across phones, spreadsheets, and disconnected tools.",
    approach:
      "Owned the multi-tenant backend: REST and GraphQL APIs with RBAC, Twilio calling and SMS to reach drivers in the field, a HelloSign-powered hiring ATS, and integrations with DTN, QuickBooks, and tank monitors.",
    outcome: "Served 20+ fuel distributors and hundreds of active fleets on one platform.",
    stack: ["Rails", "GraphQL", "Twilio", "HelloSign", "Multi-tenancy"],
  },
  {
    title: "Multi-tenant Architecture Migration",
    context: "FleetPanda",
    icon: Layers,
    problem:
      "A Rails 4 schema-per-tenant design made every migration, deploy, and cross-tenant report slower as the customer count grew.",
    approach:
      "Planned and executed a move to Rails 6 with single-schema, row-scoped tenancy, with strict data segregation.",
    outcome: "Simpler operations and a codebase that could keep up with the customer count.",
    stack: ["Rails 6", "PostgreSQL", "Data migration"],
  },
  {
    title: "Event-driven Receipt Parsing",
    context: "Charger.dev · 2022–2023",
    icon: Mail,
    problem: "Receipts arriving by email had to be read and entered by hand.",
    approach:
      "Designed a serverless pipeline (SES → S3 → EventBridge/SQS → Lambda → RDS) with a Python parser and a Rails portal for reviewing and correcting results.",
    outcome: "Inbound receipts are processed automatically at scale, and people only step in when a result needs correcting.",
    stack: ["Python", "AWS Lambda", "SQS", "EventBridge", "Rails"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="selected-work"
          title="Selected Work"
          subtitle="A few systems I designed or owned, and the problem each one solved"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 2) * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
                  <CardHeader>
                    <div className="flex gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg h-fit group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="mt-1">{project.context}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <p>
                      <span className="font-semibold">Problem: </span>
                      <span className="text-muted-foreground">{project.problem}</span>
                    </p>
                    <p>
                      <span className="font-semibold">Approach: </span>
                      <span className="text-muted-foreground">{project.approach}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-primary">Outcome: </span>
                      <span>{project.outcome}</span>
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
