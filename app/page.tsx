'use client'

import { DragCardProvider } from "@/components/providers/drag-card";

export default function Home() {
  return (
    <div className="h-[500px] w-[900px] border-2 border-red-500">
      <DragCardProvider maxHeight={500} maxWidth={900}>
        <div>
          <p>oi</p>
        </div>
      </DragCardProvider>
    </div>
  );
}
