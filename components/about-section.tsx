"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const experiences = [
  {
    company: "INSK Group",
    role: "Executive Full Stack Developer",
    period: "2026 – Present",
    achievements: [
      "Create and maintain detailed project plans; manage scope, timelines, and resource allocation.",
      "Coordinate cross-functional teams, including Frontend, Backend, QA, UX, and Graphic Design.",
      "Lead small development teams to deliver web and mobile solutions on schedule.",
      "Mentor junior developers on best practices in code quality, architecture, and version control.",
      "Assist in architectural planning and participate in system design reviews.",
      "Led and developed a sports news website using Next.js with a separate backend built in Laravel.",
      "Contributed to community and sports news websites using WordPress.",
      "Designed and implemented an automated publishing workflow using n8n for article management and distribution.",
    ],
  },
  {
    company: "Sky Smart Technology (Pvt) Ltd",
    role: "Technical Lead | Project Manager",
    period: "2025 – 2025",
    achievements: [
      "Create and maintain project plans; manage scope and resource allocation.",
      "Coordinate cross-functional teams (frontend, backend, QA, UX, hardware).",
      "Coordinating small development teams to deliver web and mobile solutions.",
      "Mentoring junior developers in best practices for code quality and version control.",
      "Assisting in architectural planning and system design reviews.",
      "Leading and contributing to electronic projects (e.g., Andon systems and hardware/software integration).",
      "Hire, onboard, and upskill team members; run training and knowledge-sharing sessions.",
    ],
  },
  {
    company: "Axcertro (Pvt) Ltd",
    role: "Full-Stack Developer Intern",
    period: "2024 – 2025",
    achievements: [
      "Developed responsive front-end components using HTML, CSS, JavaScript, and React.",
      "Implemented server-side APIs and business logic using Laravel, PHP, and Node.js.",
      "Integrated MySQL databases and optimized queries for performance.",
      "Collaborated in Agile sprints and participated in code reviews.",
    ],
  },
  {
    company: "Sampath Bank PLC",
    role: "Intern",
    period: "2021 – 2022",
    achievements: [
      "Calculated, edited, and certified bank statements for compliance.",
      "Created and managed content for internal and external communications.",
      "Ensured accuracy and consistency across multiple document formats.",
    ],
  },
  {
    company: "IDAPZ Web Solution Company",
    role: "Junior Editor",
    period: "2018 – 2019",
    achievements: [
      "Created content for the company.",
      "Ensured customer satisfaction by handling day-to-day affairs.",
      "Managing the company websites and social media.",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivery-focused leadership and full-stack development across web, mobile, and IoT projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6 max-w-5xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-lg mt-1">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}