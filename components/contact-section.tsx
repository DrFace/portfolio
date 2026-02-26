"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Linkedin, Github, Twitter, Phone, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
// import malinduliyanagecv from "@/resource/malinduliyanagecv.pdf"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "praveenliyanage1998@gmail.com",
    href: "mailto:praveenliyanage1998@gmail.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "No. 13/4/1, Nithulathanne, Kundasale"
  },
   {
     icon: Phone,
    label: "Contact Number",
     value: "+94 767 065 517",
     href: "tel:+94767065517"
  }
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-blue-500"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "hover:text-gray-700 dark:hover:text-gray-300"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    color: "hover:text-sky-500"
  }
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">My CV</h3>
                <div className="w-full h-[600px]">
                  <iframe
                    src="/resource/malinduliyanagecv.pdf"
                    width="100%"
                    height="600px"
                    className="border rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            {info.href ? (
                              <a href={info.href} className="text-lg font-medium hover:text-primary transition-colors">
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-lg font-medium">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className={`p-3 bg-secondary rounded-lg transition-colors ${social.color}`}
                        >
                          <Icon className="h-6 w-6" />
                        </motion.a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <a href="/resource/malinduliyanagecv.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full" size="lg">
                  Download Resume
                </Button>
              </a>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
