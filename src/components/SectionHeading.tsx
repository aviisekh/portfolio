"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-2xl">{subtitle}</p>}
    </motion.div>
  );
}
