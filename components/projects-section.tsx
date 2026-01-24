"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Enterprise Resource Planning System",
    description: "Comprehensive ERP solution for manufacturing companies with inventory management, production planning, and financial reporting modules.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    category: "Full Stack"
  },
  {
    title: "Real-time Banking Dashboard",
    description: "Secure banking dashboard with real-time transaction processing, fraud detection, and comprehensive analytics for financial institutions.",
    image: "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg",
    technologies: ["Next.js", "Laravel", "MySQL", "Redis", "WebSocket"],
    category: "Full Stack"
  },
  {
    title: "IoT Smart Home Controller",
    description: "Mobile and web application for controlling smart home devices with ESP32 integration, real-time monitoring, and automation rules.",
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    technologies: ["React Native", "Node.js", "MQTT", "ESP32", "MongoDB"],
    category: "IoT"
  },
  {
    title: "E-commerce Platform",
    description: "Multi-vendor marketplace with payment gateway integration, inventory management, and advanced search and filtering capabilities.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL", "Elasticsearch"],
    category: "Full Stack"
  },
  {
    title: "Project Management Tool",
    description: "Collaborative project management platform with kanban boards, time tracking, resource allocation, and team communication features.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    technologies: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
    category: "Full Stack"
  },
  {
    title: "Healthcare Management System",
    description: "Patient management system with appointment scheduling, electronic health records, and telemedicine capabilities for clinics.",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "WebRTC"],
    category: "Full Stack"
  }
]

const categories = ["All", "Full Stack", "IoT"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter)

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of innovative solutions delivered across various industries
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
            <motion.div
              key={index}
              variants={cardVariants}
              layout
            >
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
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
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
