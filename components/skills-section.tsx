"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Palette, Server, Cpu, Users, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    skills: ["C++", "Python", "PHP", "Java", "HTML", "SQL", "JavaScript", "React", "Laravel", "Next.js"],
  },
  {
    icon: Server,
    title: "Architecture & Backend",
    skills: ["Software architecture design", "REST APIs", "MySQL", "Node.js", "Laravel", "Database optimization"],
  },
  {
    icon: Wrench,
    title: "Automation & Tools",
    skills: ["Basic n8n automation", "Git", "MS Office", "Adobe packages"],
  },
  {
    icon: Cpu,
    title: "Hardware & Networking",
    skills: ["Computer hardware knowledge", "Electronics", "Machinery & network knowledge"],
  },
  {
    icon: Users,
    title: "Delivery & Management",
    skills: ["Project management (Kanban)", "Mentoring", "Team coordination", "Code quality & version control"],
  },
  {
    icon: Palette,
    title: "Media & Growth",
    skills: ["Basic graphics knowledge", "Basic SEO knowledge", "Social media management (Facebook, YouTube, Reddit, Twitch, Discord)"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Core strengths across engineering, delivery, and technical leadership
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.15 + i * 0.04 }}
                        >
                          <Badge
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}