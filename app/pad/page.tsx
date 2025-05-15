import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";


export default function Pad() {
    return (
        <div className="flex flex-col space-y-4 h-[90%] bg-gray-100 rounded-lg m-10 p-6">
            <div className="">
                <Button>
                    <Settings />
                    </Button>
            </div>
            <div className="bg-white h-[95%] w-full select-none border-2">
            </div>
        </div>
    )
}