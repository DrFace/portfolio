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
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">
            Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Technical <span className="text-primary italic">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated stack of technologies and methodologies I've mastered to deliver high-performance digital solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[16rem]"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            // Define different span patterns for a Bento effect
            const spans = [
              "md:col-span-3 md:row-span-2", // 0
              "md:col-span-3 md:row-span-1", // 1
              "md:col-span-2 md:row-span-1", // 2
              "md:col-span-2 md:row-span-2", // 3
              "md:col-span-2 md:row-span-1", // 4
              "md:col-span-6 md:row-span-1", // 5
            ]
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={spans[index % spans.length]}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full group relative overflow-hidden bg-background/40 backdrop-blur-xl border-white/10 dark:border-white/5 hover:border-primary/50 transition-all duration-500 shadow-2xl">
                  {/* Glowing background effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  
                  <div className="relative h-full p-6 flex flex-col bg-background/60 dark:bg-zinc-950/60">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="flex items-center gap-4 text-2xl font-bold">
                        <div className="p-3 bg-primary/20 rounded-xl group-hover:scale-110 transition-transform duration-500">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 flex-grow">
                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((skill, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.1 + i * 0.02 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-white/5 hover:bg-primary/20 text-foreground border-white/10 dark:border-white/5 hover:border-primary/40 transition-all duration-300 py-1.5 px-3 text-sm font-medium rounded-lg"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}