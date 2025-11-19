"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, Code, Server, Users, TrendingUp, Cpu } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Danphe Software Labs",
    location: "Nepal",
    period: "June 2024 - Current",
    icon: Cpu,
    description: "Providing software development services to Fluid Commerce Inc, a US-based eCommerce platform similar to Shopify",
    achievements: [
      "Architected and developed an autonomous droplet integration system enabling third-party apps to seamlessly integrate with the platform through a standardized API framework",
      "Developed a RAG-based system using pg-vector, designing an embeddings creation and refresh framework to optimize AI-powered search and retrieval",
      "Integrated AI-powered development tools like Cursor, Co-Pilot, Devin to enhance productivity",
      "Restructured the legacy assets pipeline and SaaS architecture",
      "Develop and Maintain pro features like OpenAI integration, Catch Ups",
      "Worked on GCP to manage logs, databases, storage, servers, and background jobs",
      "Improved system stability by refactoring and adding unit tests",
      "Worked as a team lead to set new standards and create processes"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Good Works on Earth",
    location: "United States",
    period: "July 2023 - June 2024",
    icon: TrendingUp,
    achievements: [
      "Stripe Integration for subscription management",
      "Optimized databases for improved query performance",
      "Upgraded the codebase to the latest Rails version",
      "Added specs to ensure software stability"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Flightree Inc",
    location: "Israel",
    period: "July 2023 - November 2023",
    icon: Code,
    achievements: [
      "Developed and deployed flight booking system (Backend & Frontend)",
      "Collaborated with cross-functional teams to design and implement new features",
      "Worked with Heroku, Ruby on Rails, and AWS for scalable software solutions"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Charger.dev",
    location: "United States",
    period: "December 2022 - March 2023",
    icon: Server,
    achievements: [
      "Led a short-term project on receipt management by building an Email Parser Service using Python on AWS Lambda",
      "Developed a web app for managing email receipts using Ruby on Rails",
      "Designed AWS infrastructure with SES, S3, SQS, Lambda, and RDS"
    ]
  },
  {
    title: "Senior Software Engineer/Solution Architect",
    company: "FleetPanda Petroleum Logistics Software",
    location: "San Mateo, CA",
    period: "February 2019 - November 2022",
    icon: Briefcase,
    achievements: [
      "Refactored a legacy application, improving code quality and maintainability",
      "Developed a multi-tenant architecture, ensuring secure data segregation",
      "Built a workflow system for driver shift confirmation, reducing manual intervention",
      "Integrated back-office systems with accounting tools and tank monitoring APIs",
      "Designed an inventory management system with automated reconciliation",
      "Implemented CI/CD pipelines with GitHub Actions and Heroku",
      "Optimized performance using APM tools (ScoutAPM, Coralogix, NewRelic)",
      "Actively contributed to hiring and training backend team members"
    ]
  },
  {
    title: "Software Engineer",
    company: "Leapfrog Technology",
    location: "Kathmandu, Nepal",
    period: "July 2016 - November 2018",
    icon: Users,
    achievements: [
      "Developed R3 project in ROR, a project management web app for Language Scientific, a US based client",
      "Built Msights Object Manager, a web tool for database visualization in EmberJs",
      "Created RCardScanner, an Android OCR app for mobile recharge cards"
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            Experience
          </h2>
          <p className="text-muted-foreground">8+ years of professional software engineering experience</p>
        </motion.div>

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
                        <li key={i} className="flex gap-2 text-sm group/item hover:text-primary transition-colors">
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

        {/* Timeline indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-px w-8 bg-border" />
            <span>8+ years of continuous growth and impact</span>
            <div className="h-px w-8 bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}