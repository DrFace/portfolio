"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { Award, Users, Code, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  {
    icon: Code,
    value: 30,
    suffix: "+",
    label: "Projects Delivered",
    color: "text-blue-500"
  },
  {
    icon: Users,
    value: 10,
    suffix: "+",
    label: "Team Members Led",
    color: "text-green-500"
  },
  {
    icon: Award,
    value: 3,
    suffix: "+",
    label: "Years Experience",
    color: "text-purple-500"
  },
  {
    icon: Star,
    value: 100,
    suffix: "K+",
    label: "Users Impacted",
    color: "text-orange-500"
  }
]

const highlights = [
  "Developed and deployed scalable web applications using modern frameworks",
  "Led cross-functional teams across multiple time zones",
  "Mentored 15+ junior developers to senior positions",
  "Worked with cloud platforms (AWS/GCP/Azure) to deploy and monitor applications",
  "Collaborated in Agile teams, delivering features on tight deadlines",
  "Designed database schemas ",
  "Explored new technologies and frameworks, improving team technical stack",
  "Integrated third-party APIs and services to enhance application functionality",



]

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState("0")

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2 })
      return controls.stop
    }
  }, [count, value, isInView])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest + suffix)
    })
    return unsubscribe
  }, [rounded, suffix])

  return <span ref={ref}>{displayValue}</span>
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
}

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">
            Impact
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Milestones</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Quantifying excellence through measurable impact and consistent delivery.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative overflow-hidden bg-background/40 backdrop-blur-xl border-white/10 dark:border-white/5 hover:border-primary/50 transition-all duration-500 shadow-2xl">
                   <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                   
                   <CardContent className="relative pt-10 pb-8 text-center bg-background/60 dark:bg-zinc-950/60">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-4 rounded-2xl bg-white/5 border border-white/10 inline-block mb-6 shadow-xl ${achievement.color.replace('text', 'bg').replace('500', '500/10')}`}
                    >
                      <Icon className={`h-10 w-10 ${achievement.color}`} />
                    </motion.div>
                    <div className="text-5xl font-black mb-2 tracking-tighter">
                      <Counter value={achievement.value} suffix={achievement.suffix} />
                    </div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">{achievement.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-4xl mx-auto relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-indigo-600/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative p-10 md:p-14 bg-background/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-3xl overflow-hidden">
            <h3 className="text-3xl font-black text-center mb-12 tracking-tight">Technical <span className="italic text-primary">Highlights</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="flex items-start gap-4 py-2 group/h"
                >
                  <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/h:bg-primary/20 transition-colors">
                    <Star className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed group-hover/h:text-foreground transition-colors">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
