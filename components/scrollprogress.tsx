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
        const currentTheme =
            document.documentElement.getAttribute("data-theme") === "dark"
                ? "dark"
                : "light";
        setTheme(currentTheme);
    };

    useEffect(() => {
        handleScroll();
        detectTheme();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        window.addEventListener("themechange", detectTheme);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            window.removeEventListener("themechange", detectTheme);
        };
    }, []);

    // Vibrant colors
    const barColor =
        theme === "dark"
            ? "linear-gradient(90deg, #ff4e50, #f9d423)" // red → yellow
            : "linear-gradient(90deg, #00c6ff, #0072ff)"; // light blue → blue

    return (
        <div className="fixed top-0 left-0 w-full h-3 z-50 bg-gray-300 dark:bg-gray-900">
            <div
                className="h-full transition-all duration-150 ease-out shadow-lg"
                style={{
                    width: `${scrollPercent}%`,
                    backgroundImage: barColor,
                    boxShadow: "0 0 10px rgba(0,0,0,0.5)", // glow effect
                }}
            />
        </div>
    );
}
