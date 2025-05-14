'use client'

import { useEffect, useState } from "react";

interface Props {
    maxHeight: number;
    maxWidth: number;
    children: React.ReactNode
}

export function DragCardProvider({children, maxHeight, maxWidth}: Props) {
    const [dragged, setDragged] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (dragged) {
                setPosition(
                    { 
                        x: e.clientX >= maxWidth ? maxWidth : e.clientX, 
                        y: e.clientY >= maxHeight ? maxHeight : e.clientY
                    }
                );
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [dragged]);

    return (
        <div className={`absolute select-none h-[100px] w-[100px] border-2 border-red-500 flex flex-col items-center justify-center ${dragged ? "cursor-grabbing" : "cursor-grab"}`} 
            onMouseDown={() => {
                setDragged(true)
            }} 
            onMouseUp={() => {
                setDragged(false)
            }}
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
                transform: "translate(-50%, -50%)",
            }}
        >
            {children}
        </div>
    );
}
