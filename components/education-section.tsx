"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    degree: "Associate of Computer Science",
    institution: "University of the People",
    period: "2025 – Present",
    status: "Pursuing",
    description: "Online accredited program focusing on software engineering fundamentals, algorithms, and system design."
  },
  {
    degree: "B.Sc. (Hons) in Computer Science & Software Engineering",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2022 – Present",
    status: "Pursuing",
    description: "Comprehensive program covering software development, database systems, web technologies, and project management."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
}

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">
            Foundation
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Education <span className="text-primary">&</span> Academy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building a strong academic base while maintaining a commitment to lifelong learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative overflow-hidden bg-background/40 backdrop-blur-xl border-white/10 dark:border-white/5 hover:border-primary/50 transition-all duration-500 shadow-2xl">
                 {/* Glowing background effect on hover */}
                 <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  
                <div className="relative p-8 bg-background/60 dark:bg-zinc-950/60">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-primary/20 rounded-xl group-hover:scale-110 transition-transform duration-500">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-bold">{edu.degree}</CardTitle>
                      </div>
                      <CardDescription className="text-lg font-medium text-foreground/80">
                        {edu.institution}
                      </CardDescription>
                      <p className="text-muted-foreground mt-4 leading-relaxed">{edu.description}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        <Calendar className="h-3 w-3" />
                        <span>{edu.period}</span>
                      </div>
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        edu.status === "Pursuing"
                          ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                          : "bg-green-500 text-white shadow-lg shadow-green-500/20"
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
