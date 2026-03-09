"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/paths";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: "Full Stack" | "IoT";
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Sports News Website",
    description:
      "High-performance sports news platform built with Next.js and Laravel, featuring automation with n8n.",
    image: "/projects/8jj-cricket.png",
    technologies: ["Next.js", "Laravel", "n8n", "Tailwind CSS", "TypeScript", "Blade", "MySQL"],
    category: "Full Stack",
    link: "https://8jjcricket.com",
  },
  {
    title: "Customer Relationship & Inventory Management System",
    description:
      "Management system for tracking customer interactions and inventory levels to optimize operations.",
    image: "/projects/namerathna.png",
    technologies: ["React", "Laravel", "MySQL", "CSS", "PHP"],
    category: "Full Stack",
    link: "https://nmd.drface.online/",
  },
  {
    title: "Work Order Management System",
    description:
      "System for managing industrial work orders, maintenance tasks, and resource allocation.",
    image: "/projects/work-order-final.jpg",
    technologies: ["JavaScript", "PHP", "MySQL", "CSS"],
    category: "Full Stack",
  },
  {
    title: "Maintenance Management System",
    description:
      "Platform for scheduling and monitoring equipment maintenance and facility repairs.",
    image: "/projects/maintenance-system.png",
    technologies: ["JavaScript", "Laravel", "MySQL"],
    category: "Full Stack",
  },
  {
    title: "Andon Downtime Monitoring System",
    description:
      "Real-time downtime monitoring for manufacturing floors with alerts and status visualization.",
    image: "/projects/andon-system.jpg",
    technologies: ["IoT", "ESP32", "Bootstrap", "Python", "MQTT"],
    category: "IoT",
  },
  {
    title: "Air Suction Monitoring System",
    description:
      "Industrial monitoring solution for air suction levels with real-time dashboard reporting.",
    image: "/projects/air-suction-system.jpg",
    technologies: ["IoT", "Arduino", "Bootstrap"],
    category: "IoT",
  },
];

const categories = ["All", "Full Stack", "IoT"] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = useMemo(() => {
    return filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-primary backdrop-blur-sm">
            Portfolio
          </span>

          <h2 className="mb-6 text-4xl font-black tracking-tight md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            A showcase of complex systems, industrial IoT solutions, and high-performance web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`h-11 rounded-xl px-6 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  filter === category
                    ? "border-transparent bg-primary shadow-lg shadow-primary/25"
                    : "border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10"
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
          className="grid grid-cols-1 gap-6 md:grid-cols-12"
        >
          {filteredProjects.map((project, index) => {
            const spans = [
              "md:col-span-8 md:row-span-1",
              "md:col-span-4 md:row-span-1",
              "md:col-span-4 md:row-span-1",
              "md:col-span-4 md:row-span-1",
              "md:col-span-4 md:row-span-1",
              "md:col-span-6 md:row-span-1",
              "md:col-span-6 md:row-span-1",
            ];

            return (
              <motion.div
                key={`${project.title}-${index}`}
                variants={cardVariants}
                layout
                className={spans[index % spans.length]}
              >
                <Card className="relative flex h-full flex-col overflow-hidden border-white/10 bg-background/40 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-primary/50 dark:border-white/5 group">
                  <div className="relative aspect-video overflow-hidden bg-zinc-900/40 p-2 md:h-64 md:aspect-auto">
                    <img
                      src={withBasePath(project.image)}
                      alt={project.title}
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                    <div className="absolute right-4 top-4 flex gap-2">
                      <Badge className="bg-primary/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                        {project.category}
                      </Badge>
                    </div>

                    <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="translate-y-4 transform transition-transform duration-300 delay-75 group-hover:translate-y-0"
                        >
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-12 w-12 rounded-2xl bg-white text-zinc-950 shadow-xl transition-all hover:scale-110"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </Button>
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="translate-y-4 transform transition-transform duration-300 delay-150 group-hover:translate-y-0"
                        >
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-12 w-12 rounded-2xl bg-white text-zinc-950 shadow-xl transition-all hover:scale-110"
                          >
                            <Github className="h-5 w-5" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-grow flex-col space-y-4 p-6">
                    <div>
                      <CardTitle className="mb-2 text-2xl font-bold transition-colors group-hover:text-primary">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <Badge
                          key={`${tech}-${i}`}
                          variant="secondary"
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium backdrop-blur-sm"
                        >
                          {tech}
                        </Badge>
                      ))}

                      {project.technologies.length > 4 && (
                        <Badge
                          variant="secondary"
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-bold"
                        >
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}