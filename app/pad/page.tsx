import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";


export default function Pad() {
    return (
        <div className="flex flex-col space-y-4 h-[90%] bg-gray-100 rounded-lg">
            <div className="p-4">
                <Button>
                    <Settings />
                    </Button>
            </div>
            <div className="bg-white h-[85%] w-full select-none">
            </div>
        </div>
    )
}