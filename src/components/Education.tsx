"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Medal, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Computer Science",
    field: "Computer Engineering",
    institution: "Kathmandu University, Nepal",
    gpa: "3.64 out of 4.0",
    period: "September 2016"
  },
  {
    degree: "Higher Education (HSEB)",
    field: "+2 Science",
    institution: "Radiant Higher Secondary School, Nepal",
    period: "May 2012"
  }
];

const certifications = [
  { name: "Vim for Ruby Developers", icon: Trophy },
  { name: "Columbia University Micromasters Program in Robotics", icon: Medal },
  { name: "Columbia University Micromasters Program in Machine Learning", icon: Medal },
  { name: "Columbia University Micromasters Program in Artificial Intelligence", icon: Medal },
  { name: "Rails with Active Record and Action Pack", icon: Trophy }
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            Education & Certifications
          </h2>
          <p className="text-muted-foreground">Academic background and professional certifications</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-primary pl-4 hover:border-primary/70 transition-colors group"
                  >
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{edu.degree}</h3>
                    <p className="text-muted-foreground font-medium">{edu.field}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                    {edu.gpa && (
                      <Badge variant="secondary" className="mt-2">
                        GPA: {edu.gpa}
                      </Badge>
                    )}
                    <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {edu.period}
                    </p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Certifications</CardTitle>
                </div>
                <CardDescription>Professional development and specialized training</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.ul
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {certifications.map((cert, index) => {
                    const Icon = cert.icon;
                    return (
                      <motion.li
                        key={index}
                        variants={item}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm flex-1">{cert.name}</span>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Achievement summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Companies Worked With</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Professional Certifications</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}