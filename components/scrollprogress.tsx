"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setScrollPercent(percent);
    };

    const detectTheme = () => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");
    };

    useEffect(() => {
        handleScroll();
        detectTheme();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    detectTheme();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            observer.disconnect();
        };
    }, []);

    // Vibrant colors
    const barColor =
        theme === "dark"
            ? "linear-gradient(90deg, #ff4e50, #f9d423)" // red → yellow
            : "linear-gradient(90deg, #00c6ff, #0072ff)"; // light blue → blue

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-zinc-200/20 dark:bg-zinc-800/20">
            <div
                className="h-full transition-all duration-150 ease-out"
                style={{
                    width: `${scrollPercent}%`,
                    backgroundImage: barColor,
                    boxShadow: theme === "dark" ? "0 0 15px rgba(249, 212, 35, 0.4)" : "0 0 15px rgba(0, 198, 255, 0.4)",
                }}
            />
        </div>
    );
}
