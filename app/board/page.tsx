'use client'

import { DraggableBoard } from "@/components/drag/draggable-container";
import { DraggableGroup } from "@/components/drag/draggable-group";
import { DraggableItem } from "@/components/drag/draggable-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EllipsisVertical } from "lucide-react";

export default function Board() {
  return (
      <div className="flex flex-col h-[80%] w-[95%] border-2 bg-gray-100 m-10 py-10 px-8 rounded-lg space-y-4">
          <div className="flex space-x-4">
            <Button>Adicionar categoria</Button>
            <Button>Adicionar tarefa</Button>
          </div>
          <DraggableBoard id="board" className="flex items-center justify-start w-full h-full space-x-10 ">
            <DraggableGroup className="flex justify-start border-2 bg-gray-200 p-2">
              <div className="flex justify-between w-full">
                <h1 className="italic text-lg font-bold ">NÃO INICIADO</h1>
                <Button><EllipsisVertical /></Button>
              </div>
              <DraggableItem boardId="board">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              </DraggableItem>
              <DraggableItem boardId="board">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              </DraggableItem>
            </DraggableGroup>
            <DraggableGroup className="flex justify-start border-2 bg-gray-200 p-2">
              <div className="flex justify-between w-full">
                <h1 className="italic text-lg font-bold">EM PROGRESSO</h1>
                <Button><EllipsisVertical /></Button>
              </div>
              <DraggableItem boardId="board">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              </DraggableItem>
            </DraggableGroup>
            <DraggableGroup className="flex justify-start border-2 bg-gray-200 p-2">
              <div className="flex justify-between w-full">
                <h1 className="italic text-lg font-bold">CONCLUÍDO</h1>
                <Button><EllipsisVertical /></Button>
              </div>
              <DraggableItem boardId="board">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              </DraggableItem>
            </DraggableGroup>
          </DraggableBoard>
      </div>
  );
}
