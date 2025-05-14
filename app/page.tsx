'use client'

import { DraggableBoard } from "@/components/drag/draggable-container";
import { DraggableGroup } from "@/components/drag/draggable-group";
import { DraggableItem } from "@/components/drag/draggable-item";

export default function Home() {
  return (
      <div className="h-[80%] w-[95%] border-2 border-gray-500 m-10 mt-30 p-10">
          <DraggableBoard className="flex items-center justify-start w-full h-full space-x-10">
            <DraggableGroup className="flex justify-center w-[30%] h-[80%] border-2 border-blue-500">
              <h1>Titulo</h1>
              <DraggableItem>
                <p>oi</p>
              </DraggableItem>
              <DraggableItem>
                <p>Olá</p>
              </DraggableItem>
            </DraggableGroup>
            <DraggableGroup className="flex justify-center w-[30%] h-[80%] border-2 border-blue-500">
              <h1>Titulo 22</h1>
              <DraggableItem>
                <p>oi</p>
              </DraggableItem>
            </DraggableGroup>
            <DraggableGroup className="flex justify-center w-[30%] h-[80%] border-2 border-blue-500">
              <h1>Titulo 3</h1>
              <DraggableItem>
                <p>Olá</p>
              </DraggableItem>
            </DraggableGroup>
          </DraggableBoard>
      </div>
  );
}
