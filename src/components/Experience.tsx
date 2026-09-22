"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Briefcase, Code, Server, Users, TrendingUp, Cpu, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Engineering Contractor · Remote Team Lead",
    company: "Narmada Infosys — Good Works on Earth",
    location: "Remote · US-based non-profit",
    period: "Jan 2026 - Present",
    icon: Users,
    description: "Part-time, alongside deliberate upskilling in AI agents and LLM tooling",
    achievements: [
      "Leading a team of interns — assigning work, reviewing code, and maintaining engineering workflows for ongoing client delivery",
      "Keeping delivery continuous through a transitional period for the team"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Danphe Software Labs — Fluid Commerce",
    location: "Remote · US-based affiliate-marketing eCommerce SaaS",
    period: "Jun 2024 - Jan 2026",
    icon: Cpu,
    description: "Senior engineer across multiple product pods in a distributed team, delivering backend features end-to-end",
    achievements: [
      "Designed Droplets — an open-source, installable plugin framework letting companies connect back-office tools (e.g. QuickBooks). Each droplet is an autonomous service with its own database, handling logs, callbacks, and field mapping, with a published spec so third-party vendors can build their own",
      "Built a complete RAG pipeline for an AI chatbot: pg-vector embedding storage, retrieval logic, and a debounced Sidekiq refresh strategy — shipped as a pro-tier feature",
      "Designed and maintained Single Sign-On across multiple internal platform services",
      "Built Catch Ups — proactive follow-ups notifying affiliates of product and media changes, improving engagement",
      "Restructured the legacy assets pipeline and multi-tenant architecture",
      "Operated in GCP and Kubernetes — deploying jobs, running cron tasks, debugging from logs, and validating background jobs in production"
    ]
  },
  {
    title: "Senior Software Engineer · Remote Team Lead",
    company: "Narmada Infosys — Good Works on Earth",
    location: "Remote · US-based non-profit",
    period: "Jul 2023 - Jun 2024",
    icon: TrendingUp,
    achievements: [
      "Led the Stripe billing integration for subscription management, enabling recurring revenue and reducing payment-related support tickets",
      "Optimised critical database queries, measurably improving response times on high-traffic endpoints",
      "Drove a Rails version upgrade, modernising the codebase and resolving outstanding security vulnerabilities",
      "Raised automated test coverage and enforced spec quality standards"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Flightree Inc.",
    location: "Remote",
    period: "Jul 2023 - Nov 2023",
    icon: Code,
    achievements: [
      "Designed and built a full-stack flight booking system (Rails + React), from search to confirmation",
      "Shipped on an accelerated cycle with product and design on Heroku, Rails, and AWS"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Charger.dev",
    location: "Remote · United States",
    period: "Dec 2022 - Mar 2023",
    icon: Server,
    achievements: [
      "Built an Email Parser Service in Python on AWS Lambda to automate receipt management at scale",
      "Designed the event-driven AWS infrastructure: EventBridge, SES, S3, SQS, Lambda, RDS",
      "Built a Rails portal for reviewing and correcting imported receipts"
    ]
  },
  {
    title: "Guest Lecturer (Part-time)",
    company: "Far Western University — Dept. of Computer Engineering",
    location: "Nepal",
    period: "Aug 2022 - Feb 2023",
    icon: GraduationCap,
    achievements: [
      "Taught Data Structures & Algorithms to undergraduate engineering students",
      "Designed curriculum and practical assignments via Google Classroom and GitHub to mirror real developer workflows",
      "Authored midterm and final examinations"
    ]
  },
  {
    title: "Senior Software Engineer / Solutions Architect",
    company: "FleetPanda — Petroleum Logistics SaaS",
    location: "Remote · San Mateo, CA",
    period: "Feb 2019 - Nov 2022",
    icon: Briefcase,
    description: "Joined as an early engineer; grew into solutions architect over 3+ years",
    achievements: [
      "Owned backend architecture for a multi-tenant platform powering real-time dispatch, invoicing, and driver management for 20+ fuel distributors and hundreds of active fleets",
      "Cut server costs from $5,000 to $1,200/month (76%) by profiling bottlenecks, tuning queries, optimising slow APIs, and fixing wasteful frontend call patterns",
      "Built REST and GraphQL APIs with authentication and role-based access control for dashboards and driver mobile workflows",
      "Integrated Twilio so dispatchers could text/call drivers in the field from the web app — critical for reaching offline drivers mid-dispatch",
      "Built a driver-hiring Applicant Tracking System with HelloSign e-signatures, replacing manual onboarding",
      "Built shift confirmation, inventory reconciliation, and back-office integrations with DTN, QuickBooks, and tank-monitoring APIs",
      "Established backend code standards, review process, CI/CD pipelines, and documentation as the team scaled; contributed to hiring and training"
    ]
  },
  {
    title: "Software Engineer",
    company: "Leapfrog Technology",
    location: "Kathmandu, Nepal",
    period: "Jul 2016 - Nov 2018",
    icon: Code,
    achievements: [
      "Designed and built R3, a Rails project-management app for Language Scientific (US client)",
      "Built M-sights Object Manager, a database visualisation tool in EmberJS",
      "Created RCardScanner, an Android OCR app to top up recharge cards via camera"
    ]
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

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="8+ years building and scaling production SaaS for US-based companies, remotely"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div key={index} variants={item}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="flex gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg h-fit group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-base mt-1">
                            {exp.company} • {exp.location}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="self-start whitespace-nowrap">
                        {exp.period}
                      </Badge>
                    </div>
                    {exp.description && (
                      <p className="text-sm text-muted-foreground italic mt-2">{exp.description}</p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-primary mt-1.5">●</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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