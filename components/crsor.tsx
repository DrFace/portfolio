"use client"

import { useEffect, useState } from "react";

type Position = {
    x: number;
    y: number;
};

export const Cursor = () => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
            className="fixed pointer-events-none w-10 h-10 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out mix-blend-difference z-50"
        />
    );
};
