"use client"

import { motion } from "framer-motion"
// import { Heart } from "lucide-react"
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t">
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Zap className="h-4 w-4 text-red-500 fill-red-500" />Powerd by  Malindu Liyanage<Zap  className="h-4 w-4 text-red-500 fill-red-500" />
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
