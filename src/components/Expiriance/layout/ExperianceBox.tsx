import { Reveal } from "@/common/Reveal/Reveal";
import { ChildProp } from "@/types/common.interface";

export const HightlightBox = ({children}: ChildProp) => {
    return (
        <div className="rounded-lg border border-zinc-800/80 border-r-4 bg-indigo-900/15 text-gray-200 shadow-sm relative overflow-hidden">
            <div className="p-6">
                {children}
            </div>
        </div>
    )
}

export const RegularBox = ({children}: ChildProp) => {
    return (
        <Reveal custom="w-full">
            <div className="rounded-lg border border-r-4 border-indigo-950 bg-black text-gray-200 shadow-sm relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-300">
                <div className="p-6">
                    {children}
                </div>
            </div>
        </Reveal>
    )
}