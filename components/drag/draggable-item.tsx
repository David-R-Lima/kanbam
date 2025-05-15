'use client';

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Props extends React.ComponentProps<"div"> {
  boardId: string
  children: React.ReactNode;
}

export function DraggableItem({
  boardId,
  children,
  className,
  ...props
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  const [boardSize, setBoardSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        if(dragging) {
            const board = document.getElementById(boardId);

            if (!board) return;

            if (!ref.current || !ref.current.parentElement) return;

            const boardRect = board.getBoundingClientRect();
    
            setBoardSize({
                width: boardRect.width,
                height: boardRect.height,
            });
    
            const x = e.clientX - boardRect.left - offset.x;
            const y = e.clientY - boardRect.top - offset.y;
    
            setPosition({
                x: Math.min(Math.max(0, x), boardSize.width - 100 ),
                y: Math.min(Math.max(0, y), boardSize.height - 100),
            });
        }
    };

    const stopDragging = () => setDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, [dragging, offset, parentSize, boardSize]);


  useEffect(() => {
    if (!ref.current || !ref.current.parentElement) return;

    const parentRect = ref.current.parentElement.getBoundingClientRect();

    setParentSize({
      width: parentRect.width,
      height: parentRect.height,
  });
  }, [])
  return (
    <div
      ref={ref}
      onMouseDown={(e) => {
        setDragging(true);
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
          setOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }
      }}
      className={cn(
        `absolute select-none flex ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`,
        className
      )}
      style={{
        top: position.y,
        left: position.x,
        width: parentSize.width - 40,
        height: 80,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
