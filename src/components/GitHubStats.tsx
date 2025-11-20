"use client";

import { motion } from "framer-motion";
import { Github, TrendingUp, Code, GitBranch } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GitHubStats() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use appropriate theme for GitHub stats
  const statsTheme = mounted && theme === "light" ? "default" : "github_dark";
  const streakTheme = mounted && theme === "light" ? "default" : "github-dark-blue";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Github className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Open Source Contributions</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">GitHub Activity</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tracking my journey in open source development and continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Stats Grid - Top Languages & GitHub Stats */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Most Used Languages</h3>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=aviisekh&layout=compact&theme=${statsTheme}&hide_border=true&bg_color=00000000`}
                  alt="Top Languages"
                  className="w-full max-w-md"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">GitHub Statistics</h3>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=aviisekh&show_icons=true&theme=${statsTheme}&hide_border=true&bg_color=00000000`}
                  alt="GitHub Stats"
                  className="w-full max-w-md"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* Contribution Streak - Full Width */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <GitBranch className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Contribution Streak</h3>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=aviisekh&theme=${streakTheme}&hide_border=true&background=00000000`}
                alt="GitHub Streak"
                className="w-full max-w-4xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Profile Views Counter */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 text-muted-foreground text-sm"
          >
            <span>Profile Views:</span>
            <img
              src="https://komarev.com/ghpvc/?username=aviisekh&style=flat-square&color=blueviolet"
              alt="Profile Views"
              loading="lazy"
            />
          </motion.div>

          {/* Quick Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: Code, label: "Languages", value: "10+" },
              { icon: GitBranch, label: "Repositories", value: "50+" },
              { icon: TrendingUp, label: "Contributions", value: "1000+" },
              { icon: Github, label: "Years Active", value: "8+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card rounded-lg p-6 text-center shadow-md border border-border hover:shadow-lg transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-8"
          >
            <a
              href="https://github.com/aviisekh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              <Github className="h-5 w-5" />
              <span className="font-medium">View Full GitHub Profile</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
