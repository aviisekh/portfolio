"use client";

import { Mail, Github, Linkedin, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const terminal = [
  { cmd: "whoami", out: "backend engineer · rails · python · postgres · gcp/aws" },
  { cmd: "uptime", out: "8+ years shipping multi-tenant SaaS for US companies" },
  { cmd: "cat focus.txt", out: "system design, performance, RAG & agentic workflows" },
];

const impact = [
  {
    value: "76%",
    label: "infra cost cut",
    detail: "$5,000 → $1,200/month at FleetPanda via API, query, and call-pattern optimisation",
  },
  {
    value: "30%",
    label: "faster db",
    detail: "Eliminated N+1 bottlenecks on the most-trafficked application views",
  },
  {
    value: "RAG",
    label: "ai in prod",
    detail: "pg-vector chatbot pipeline — embeddings, retrieval, scheduled refresh — shipped as a pro-tier feature",
  },
  {
    value: "8+ yrs",
    label: "multi-tenant saas",
    detail: "Platforms serving hundreds of businesses across logistics and eCommerce",
  },
];

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
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
              <span className="font-mono text-xs sm:text-sm">open to senior / staff roles · remote</span>
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
              className="font-mono text-base sm:text-lg text-primary mb-6"
            >
              senior_software_engineer <span className="text-muted-foreground">·</span> backend &amp; full-stack
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

          {/* Terminal + selected impact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="rounded-xl border bg-card/80 backdrop-blur shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b bg-muted/50">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">abhishek@lalitpur: ~</span>
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed space-y-3">
                {terminal.map((line) => (
                  <div key={line.cmd}>
                    <div>
                      <span className="text-primary">$</span> {line.cmd}
                    </div>
                    <div className="text-muted-foreground">{line.out}</div>
                  </div>
                ))}
                <div>
                  <span className="text-primary">$</span>{" "}
                  <span className="inline-block w-2 h-4 align-middle bg-primary animate-pulse" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {impact.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="rounded-xl border bg-card/80 p-4 sm:p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    {stat.label}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{stat.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}