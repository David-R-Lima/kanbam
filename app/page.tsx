import { DragCardProvider } from "@/components/providers/drag-card";

export default function Home() {
  return (
    <div>
      <DragCardProvider>
        <div className="flex flex-col items-center justify-center h-[100px] w-[100px] border-2 border-red-500">
          <p>oi</p>
        </div>
      </DragCardProvider>
    </div>
  );
}
