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
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">
            Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-indigo-600 italic">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Leading teams and building high-impact systems across diverse industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-purple-500/50 to-transparent -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`relative mb-12 flex flex-col md:flex-row items-center justify-between ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 hidden md:block z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)] border-4 border-background" />

              {/* Card Container */}
              <div className="w-full md:w-[45%]">
                <Card className="group relative overflow-hidden bg-background/40 backdrop-blur-xl border-white/10 dark:border-white/5 hover:border-primary/50 transition-all duration-500 shadow-2xl">
                  {/* Glowing background effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  
                  <div className="relative p-6 sm:p-8 bg-background/60 dark:bg-zinc-950/60">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:from-primary group-hover:to-primary/70 transition-all">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-primary mt-1">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground bg-white/5 px-3 py-1.5 rounded-full border border-white/10 shrink-0 self-start">
                          <Calendar className="h-3 w-3" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mt-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="flex items-start gap-3 group/li"
                          >
                            <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 group-hover/li:scale-150 transition-transform" />
                            <span className="text-muted-foreground text-sm leading-relaxed group-hover/li:text-foreground transition-colors">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Spacer for MD screens to align cards correctly */}
              <div className="hidden md:block w-0 h-0" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}