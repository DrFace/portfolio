"use client"

import { useState, useEffect } from "react"

import { motion } from "framer-motion"
import { Download, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { withBasePath } from "@/lib/paths"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) return (
    <section id="home" className="min-h-screen flex items-center justify-center py-24" />
  )

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-24"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-30 animate-pulse" />
            <div className="relative overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl">
              <Avatar className="w-56 h-80 rounded-none">
                <AvatarImage src={withBasePath("/professionalphoto.jpeg")} alt="Professional Photo" className="object-cover" />
                <AvatarFallback className="text-4xl">ML</AvatarFallback>
              </Avatar>
            </div>
            {/* Pulsing Badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-xl"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">Available for Hire</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-primary font-bold tracking-[0.2em] uppercase text-sm md:text-base">
              Digital Architect & Team Lead
            </h3>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">
              Malindu <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-indigo-600">Liyanage</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-medium text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Engineering <span className="text-foreground font-semibold">robust scalable systems</span> and leading creative teams to deliver excellence.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="h-14 px-8 text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center">
                <Mail className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Start a Conversation
              </span>
            </Button>

            <a
              href={withBasePath("/malinduliyanagecv.pdf")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold rounded-2xl backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10 transition-all group">
                <Download className="mr-3 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                Review CV
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
              onClick={() => scrollToSection("#about")}
            >
              <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
