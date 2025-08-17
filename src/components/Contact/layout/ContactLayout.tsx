import { Reveal } from "@/common/Reveal/Reveal";
import { ChildProp } from "@/types/common.interface";
import { ContactLayoutProps } from "./ContactLayout.interface";

export default function ContactLayout({children, title}: ContactLayoutProps) {
    return(
        <div className="rounded-lg border text-white/80 shadow-sm bg-indigo-900/15 backdrop-blur-sm border-zinc-800/80">
            <Reveal custom="overflow-hidden h-full">
                <div className="p-6 space-y-6">
                    <h3 className="text-xl font-medium mb-4">{title}</h3>
                    {children}
                </div>
            </Reveal>
        </div>
    )
}