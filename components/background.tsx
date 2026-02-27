"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated Mesh Gradients */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 dark:opacity-30"
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundColor: "var(--mesh-gradient-1)" }}
      />
      <motion.div
        className="absolute top-[30%] right-[-10%] w-[45%] h-[45%] rounded-full blur-[120px] opacity-20 dark:opacity-30"
        animate={{
          x: -mousePosition.x * 0.03,
          y: mousePosition.y * 0.08,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ backgroundColor: "var(--mesh-gradient-2)" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 dark:opacity-30"
        animate={{
          x: mousePosition.x * 0.02,
          y: -mousePosition.y * 0.04,
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ backgroundColor: "var(--mesh-gradient-3)" }}
      />
      <motion.div
        className="absolute top-[10%] left-[40%] w-[35%] h-[35%] rounded-full blur-[120px] opacity-15 dark:opacity-20"
        animate={{
          x: -mousePosition.x * 0.06,
          y: -mousePosition.y * 0.02,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ backgroundColor: "var(--mesh-gradient-4)" }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  )
}
