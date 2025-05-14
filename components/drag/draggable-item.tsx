'use client';

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Props extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export function DraggableItem({
  children,
  className,
  ...props
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        if(dragging) {
            if (!ref.current || !ref.current.parentElement) return;

            const parentRect = ref.current.parentElement.getBoundingClientRect();
    
            setParentSize({
                width: parentRect.width,
                height: parentRect.height,
            });
    
            const x = e.clientX - parentRect.left - offset.x;
            const y = e.clientY - parentRect.top - offset.y;
    
            setPosition({
                x: Math.min(Math.max(0, x), parentSize.width - 100 ),
                y: Math.min(Math.max(0, y), parentSize.height - 100 ),
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
  }, [dragging, offset, parentSize]);

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
        `absolute select-none h-[100px] w-[100px] border-2 border-red-500 flex items-center justify-center ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`,
        className
      )}
      style={{
        top: position.y,
        left: position.x,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
