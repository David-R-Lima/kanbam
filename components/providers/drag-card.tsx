'use client'

import { useEffect, useState } from "react";

interface Props {
    children: React.ReactNode
}

export function DragCardProvider({children}: Props) {
    const [dragged, setDragged] = useState(false);
    const [initialPosition, setPosition] = useState([0, 0])

    useEffect(() => {
        console.log(dragged)
        if(dragged) {
            setPosition([initialPosition[0], initialPosition[1]])
        }
    }, [dragged])

    return (
        <div className={`absolute flex flex-col items-center justify-center h-[100px] w-[100px] top- border-2 border-red-500`} 
            onMouseDown={() => {
                setDragged(true)
            }} 
            onMouseUp={() => {
                setDragged(false)
            }}
        >
            {dragged && (
                <p>dragged</p>
            )}
            {children}
        </div>
    );
}