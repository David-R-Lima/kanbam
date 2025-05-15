'use client';

import { cn } from "@/lib/utils";

interface DraggableGroupProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export function DraggableGroup({ children, className, ...props }: DraggableGroupProps) {
  return (
    <div className={cn("rounded-lg w-[25%] h-[90%]", className)} {...props}>
      {children}
    </div>
  );
}