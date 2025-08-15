import { Reveal } from "@/common/Reveal/Reveal";
import { useState } from "react";

export default function Logo() {
    const [animation, setAnimation] = useState(false)

    const handleAnimation= ()=>{
        setAnimation(true);

        setTimeout(()=>setAnimation(false),1000)
    }
    
    return (
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center text-4xl text-white/90 hover:text-white active:text-white cursor-pointer">
                <a href="#home" onClick={handleAnimation} className={` duration-200 ease-in ${animation?'scale-110 animate-spin text-white':'scale-100'}`}>
                <Reveal>
                <i className="bi bi-cup-hot-fill"></i>
                </Reveal>
                </a>
            </div>
        </div>
    )
}