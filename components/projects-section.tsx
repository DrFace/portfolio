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
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Selected work across full-stack systems and industrial IoT
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="transition-all"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} layout>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-full"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                      </a>
                    )}
                    {/* keep GitHub button as UI-only unless you add per-project repos */}
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Github className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}