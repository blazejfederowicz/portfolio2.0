import { RESUME_BUTTON } from "@/constants";
import { Reveal } from "../Reveal/Reveal";
import { motion } from 'motion/react';
import { ResumeButtonProps } from "./ResumeButton.interface";

export default function ResumeButton({isBlurred, buttonRef, handleDownload} : ResumeButtonProps){
    return(
        <motion.div
            className="inline-block"
            style={{transition:"filter 0.3s ease"}}
            animate={{
                filter: isBlurred? "blur(30px)": "blur(0px)"
            }}
        >   
            <Reveal>
                <button 
                ref={buttonRef} 
                onClick={handleDownload} 
                className="md:p-4 sm:p-3 p-2 text-xs sm:text-base  leading-none cursor-pointer relative box-border bg-gradient-to-r from-purple-300 via-slate-500 to-blue-500 size-fit text-animate rounded-4xl transition-all duration-300 hover:brightness-125 active:brightness-125 ease-in-out">
                    <span>{RESUME_BUTTON}</span>
                    <div className="pointer-events-none absolute inset-px duration-150  rounded-4xl ring-1 shadow-sm ring-white/20"></div>
                </button>
            </Reveal>
        </motion.div>
    )
}