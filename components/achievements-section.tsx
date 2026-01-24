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
    <section id="achievements" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Measurable impact and recognition throughout my career
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className={`h-12 w-12 mx-auto mb-4 ${achievement.color}`} />
                    </motion.div>
                    <div className="text-4xl font-bold mb-2">
                      <Counter value={achievement.value} suffix={achievement.suffix} />
                    </div>
                    <p className="text-muted-foreground">{achievement.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-background hover:bg-secondary/50 transition-colors"
              >
                <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
