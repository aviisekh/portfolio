"use client";

import { Mail, Github, Linkedin, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const impact = [
  {
    value: "76%",
    label: "Infra cost cut",
    detail: "$5,000 → $1,200/month at FleetPanda via API, query, and call-pattern optimisation",
  },
  {
    value: "30%",
    label: "Faster database",
    detail: "Eliminated N+1 bottlenecks on the most-trafficked application views",
  },
  {
    value: "RAG",
    label: "AI in production",
    detail: "pg-vector chatbot pipeline — embeddings, retrieval, scheduled refresh — shipped as a pro-tier feature",
  },
  {
    value: "8+ yrs",
    label: "Multi-tenant SaaS",
    detail: "Platforms serving hundreds of businesses across logistics and eCommerce",
  },
];

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-10 left-1/3 -z-10 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 rounded-full mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-medium">Open to senior roles · Remote</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="block"
              >
                Abhishek Bhatta
              </motion.span>
            </h1>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-6"
            >
              Senior Software Engineer · Backend &amp; Full-Stack
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              Backend-focused engineer with <strong>8+ years</strong> designing and scaling{" "}
              <strong>multi-tenant SaaS platforms</strong> across petroleum logistics, eCommerce, and non-profit
              sectors. I build systems end-to-end — from <strong>plugin frameworks</strong> and{" "}
              <strong>RAG-based AI pipelines</strong> to billing integrations and real-time dispatch — and I care
              about the unglamorous parts too: query plans, infra bills, test coverage, and team standards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="mailto:aviisekh@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                aviisekh@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/aviisekh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/aviisekh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Lalitpur, Nepal · Remote
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="group">
                <a href="mailto:aviisekh@gmail.com">
                  <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH}/Abhishek_Bhatta_Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <a href="https://github.com/aviisekh" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                  View GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Selected impact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {impact.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">
                    {stat.label}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}