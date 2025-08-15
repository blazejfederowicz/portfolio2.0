"use client"
import NavbarComponent from "../Navbar/NavbarComponent"
import { useRef, useState } from "react"
import { Reveal } from "@/common/Reveal/Reveal";
import Image from "next/image";
import { ASSET_PATHS, FIRST_NAME, LAST_NAME, WORK_TITLE } from "@/constants";
import ResumeButton from "@/common/ResumeButton/ResumeButton";
import ProjectsButton from "@/common/ProjectsButton/ProjectsButton";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";

const HeaderComponent = ()=>{
    const downloadLink = useRef<HTMLAnchorElement | null>(null)
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const [isBlurred, setIsBlurred] = useState(false);

    const handleDownload = ()=>{
        if(downloadLink.current){
            if(buttonRef.current){
                setIsBlurred(true)
                setTimeout(()=>setIsBlurred(false),400)
            }
            return downloadLink.current.click()
        }
        return;
    }

    return(<>
    <section id="home" className=" custom-container bg-neutral-800 w-full 2xl:h-lvh relative">
       <NavbarComponent/>
       <div className="gradient hidden sm:block absolute w-[75em] h-[39em] -top-[25em] -right-[35em]"></div>
        <div className="flex w-full flex-col h-full">
            <div className="h-[64px]"/>
            <div className="container py-10 px-5 sm:p-10 md:pt-20 sm:grow mx-auto">
                <div className="grid lg:grid-cols-2 h-full w-full content-stretch xl:translate-y-16">
                    <div className="order-1 mt-4 lg:mt-0 lg:order-0 text-gray-100 flex h-full sm:justify-center items-center flex-col mb-10 sm:mb-8">
                        <div className="lg:w-full ">
                            <Reveal>
                                <h1 className="xl:text-4xl md:text-3xl sm:text-2xl text-base bg-gradient-to-r from-purple-300 via-slate-500 to-blue-500 bg-clip-text tracking-tight text-transparent text-animate">{WORK_TITLE}</h1>
                            </Reveal>
                            <Reveal>
                                <h1 className="md:text-7xl xl:text-8xl sm:text-6xl text-4xl font-bold sm:mb-3 lg:mb-6 tracking-tighter">{LAST_NAME.toUpperCase()}</h1>
                            </Reveal>
                            <Reveal>
                                <h1 className="md:text-7xl xl:text-8xl sm:text-6xl text-4xl sm:mb-3 lg:mb-6 tracking-tighter">{FIRST_NAME.toUpperCase()}</h1>
                            </Reveal>
                            <div className="w-full mt-4 lg:mt-0">
                                <ResumeButton isBlurred={isBlurred} buttonRef={buttonRef} handleDownload={handleDownload} />
                                <ProjectsButton/>
                                <a ref={downloadLink} href={ASSET_PATHS.CV_FILE} download="CV_Blazej_Federowicz.pdf" className="hidden"></a>
                            </div>
                        </div>
                        
                    </div>
                    <ProfilePicture/>
                </div>
             </div>
            <Image 
                src={ASSET_PATHS.wave}  
                height={500}
                width={500}
                className="block w-full -mb-1 " 
                alt="wave"/>
        </div>
    </section>
    </>)
   }
   
   export default HeaderComponent