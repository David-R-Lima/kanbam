'use client';

import { cn } from "@/lib/utils";

interface Props extends React.ComponentProps<"div"> {
    children: React.ReactNode
}

export function DraggableBoard({children, className, ...props}: Props) {
  return (
    <div
      className={cn("relative flex items-start justify-around",className)}
      {...props}
    >
      {children}
    </div>
  );
}
