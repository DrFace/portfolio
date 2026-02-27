"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Sports News Website",
    description:
      "High-performance sports news platform built with Next.js and Laravel, featuring automation with n8n.",
    image:
      "https://images.unsplash.com/photo-1531415074941-03f6ad88998b?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Next.js", "Laravel", "n8n", "Tailwind CSS"],
    category: "Full Stack",
    link: "https://8jjcricket.com",
  },
  {
    title: "Customer Relationship & Inventory Management System",
    description:
      "Management system for tracking customer interactions and inventory levels to optimize operations.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    category: "Full Stack",
    link: "https://nmd.drface.online/",
  },
  {
    title: "E-commerce Website",
    description:
      "E-commerce web solution with product management and responsive UI.",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=2000&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MySQL"],
    category: "Full Stack",
  },
  {
    title: "Work Order Management System",
    description:
      "System for managing industrial work orders, maintenance tasks, and resource allocation.",
    image:
      "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2000&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MySQL"],
    category: "Full Stack",
  },
  {
    title: "Maintenance Management System",
    description:
      "Platform for scheduling and monitoring equipment maintenance and facility repairs.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    technologies: ["Next.js", "Laravel", "MySQL"],
    category: "Full Stack",
  },
  {
    title: "Andon Downtime Monitoring System",
    description:
      "Real-time downtime monitoring for manufacturing floors with alerts and status visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    technologies: ["IoT", "ESP32", "React", "Node.js", "MQTT"],
    category: "IoT",
  },
  {
    title: "Air Suction Monitoring System",
    description:
      "Industrial monitoring solution for air suction levels with real-time dashboard reporting.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8eecf02bd51?q=80&w=2000&auto=format&fit=crop",
    technologies: ["IoT", "Arduino", "Node.js"],
    category: "IoT",
  },
]

const categories = ["All", "Full Stack", "IoT"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Creations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A showcase of complex systems, industrial IoT solutions, and high-performance web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`transition-all duration-300 rounded-xl px-6 h-11 text-sm font-bold uppercase tracking-wider ${
                  filter === category 
                    ? "bg-primary shadow-lg shadow-primary/25 border-transparent" 
                    : "bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {filteredProjects.map((project, index) => {
            // Pattern for bento grid spans
            const spans = [
              "md:col-span-8 md:row-span-1", // 0
              "md:col-span-4 md:row-span-1", // 1
              "md:col-span-4 md:row-span-1", // 2
              "md:col-span-4 md:row-span-1", // 3
              "md:col-span-4 md:row-span-1", // 4
              "md:col-span-6 md:row-span-1", // 5
              "md:col-span-6 md:row-span-1", // 6
            ]

            return (
              <motion.div 
                key={index} 
                variants={cardVariants} 
                layout 
                className={spans[index % spans.length]}
              >
                <Card className="h-full group relative overflow-hidden bg-background/40 backdrop-blur-xl border-white/10 dark:border-white/5 hover:border-primary/50 transition-all duration-500 shadow-2xl flex flex-col">
                  <div className="relative overflow-hidden aspect-video md:aspect-auto md:h-64">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                    
                    <div className="absolute top-4 right-4 flex gap-2">
                       {project.category && (
                         <Badge className="bg-primary/80 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                           {project.category}
                         </Badge>
                       )}
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                        >
                          <Button
                            size="icon"
                            variant="secondary"
                            className="rounded-2xl h-12 w-12 shadow-xl hover:scale-110 transition-all bg-white text-zinc-950"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </Button>
                        </a>
                      )}
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="rounded-2xl h-12 w-12 shadow-xl hover:scale-110 transition-all bg-white text-zinc-950 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-grow flex flex-col">
                    <div>
                      <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <CardDescription className="text-base line-clamp-2 leading-relaxed">{project.description}</CardDescription>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-white/5 border-white/10 text-xs font-medium px-2 py-0.5 rounded-md backdrop-blur-sm">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="bg-white/5 border-white/10 text-[10px] font-bold px-2 py-0.5 rounded-md">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
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