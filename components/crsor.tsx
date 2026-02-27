"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion"

type Position = {
    x: number;
    y: number;
};

export const Cursor = () => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            
            const target = e.target as HTMLElement;
            setIsHovering(
                !!target.closest('a') || 
                !!target.closest('button') || 
                target.tagName === 'A' || 
                target.tagName === 'BUTTON'
            );
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            <motion.div
                animate={{
                    left: position.x,
                    top: position.y,
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "white",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
                className="fixed pointer-events-none w-4 h-4 rounded-full mix-blend-difference z-[100] transform -translate-x-1/2 -translate-y-1/2"
            />
            <motion.div
                animate={{
                    left: position.x,
                    top: position.y,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
                className="fixed pointer-events-none w-10 h-10 border border-white/50 rounded-full mix-blend-difference z-[99] transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-[2px]"
            />
        </>
    );
};
