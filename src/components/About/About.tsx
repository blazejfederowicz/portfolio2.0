"use client"
import { useRef, useState } from "react"
import { Reveal } from "@/common/Reveal/Reveal";
import PhotoGallery from "./commponents/PhotoGallery/PhotoGallery";
import Biography from "./commponents/Biography/Biography";
import ContactInfo from "./commponents/ContactInfo/ContactInfo";
import Skills from "./commponents/Skills/Skills";
import { BACKEND, COMPONENTS_IDS, FRONTEND } from "@/constants";

const About = ()=>{
    const [frontend, setFrontend] = useState(true);
    const [backend, setBackend] = useState(false);
    const backendRef = useRef(null)
    const frontendRef = useRef(null)

    const handleFrontend = ()=>{
        return setBackend(false),setFrontend(true)
    }
    const handleBackend = ()=>{
        return setBackend(true),setFrontend(false)
    } 

 return(<>
    <section className="pt-1 projects-gradient" id={COMPONENTS_IDS.ABOUT}>
        <div className="container xl:px-10 mx-auto">
            <div className="flex flex-1 sm:block md:flex flex-col-reverse sm:flex-row-reverse md:justify-end md:items-center">
              <PhotoGallery/>
              <Biography/>
            </div>
        </div>
    </section>
    <section className="container px-6 xl:max-w-5xl lg:px-0 mt-[5em] sm:mt-[35em] mx-auto md:mt-20 mb-10 md:mb-0 min-h-[400px]">
        <div className="grid md:grid-cols-2">
            <div className=" order-3 md:order-1">
                <div className="flex justify-between content-center mb-5">
                    <Reveal>
                        <div ref={frontendRef} className={frontend?'':'cursor-pointer group'} onClick={handleFrontend}>
                            <h1 className={`font-semibold duration-150 ease-in-out ${frontend?'text-gray-900':'text-gray-700 hover:md:text-gray-800 active:text-gray-900'} text-2xl`}>{FRONTEND}</h1>
                            <div className={`h-2 bg-amber-600 duration-250 ease-out ${frontend? 'mx-auto w-[5em]':' w-0 group-hover:md:w-[100%] group-active::w-[100%]'} rounded-tl-4xl rounded-br-4xl`}/>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div ref={backendRef} className={backend?'':'cursor-pointer group'} onClick={handleBackend}>
                            <h1 className={`font-semibold text-2xl duration-150 ease-in-out ${backend?'text-gray-900':'text-gray-700 hover:md:text-gray-800 active:text-gray-900'} `}>{BACKEND}</h1>
                            <div className={`h-2 bg-amber-600 duration-250 ease-out ${backend? 'mx-auto w-[5em]':' w-0 group-hover:md:w-[100%] group-active::w-[100%]'} rounded-tl-4xl rounded-br-4xl`}/>
                        </div>
                    </Reveal>
                </div>
            </div>
            <Skills frontend={frontend} backend={backend}/>
            <ContactInfo/>
        </div>
    </section>
 </>)
}

export default About