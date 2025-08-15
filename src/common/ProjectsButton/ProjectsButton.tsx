import { PROJECTS_BUTTON, PROJECTS_LINK } from "@/constants";
import { Reveal } from "../Reveal/Reveal";

export default function ProjectsButton(){
    return(
        <div className="inline-block h-full">
            <Reveal custom="overflow-hidden">
                <a href={PROJECTS_LINK} className="relative group ms-1 sm:ms-2 md:p-4 sm:p-3 p-2 text-xs sm:text-base text-gray-100/70 transition-colors duration-150 ease-in-out hover:text-gray-100 active:text-gray-100 bg-black/50 rounded-4xl">
                    <span className="me-2">{PROJECTS_BUTTON}</span>
                    <i className="bi bi-box-arrow-up-right"></i>
                    <div className="pointer-events-none absolute inset-px duration-150 ease-in-out rounded-4xl ring-1 group-hover:ring-white/40 group-active:ring-white/40 shadow-sm ring-white/20"></div>
                </a>
            </Reveal>
        </div>
    )
}