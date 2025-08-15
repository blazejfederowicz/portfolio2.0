import { Reveal } from "@/common/Reveal/Reveal";
import { ASSET_PATHS } from "@/constants";
import Image from "next/image";

export default function PhotoGallery(){
    return (
        <div className="overflow-hidden w-full sm:w-auto md:w-full sm:float-end md:float-none sm:-ms-64 md:-ms-0 sm:mt-32 md:mt-0 " style={{ shapeOutside: `inset(10px 0px 10px 0px)` }}>
            <div className="grid grid-cols-3 w-[500px] gap-10 grid-rows-1 mt-10 sm:mt-0 lg:ms-5 px-5 justify-self-end md:justify-self-start">
                <div className="lg:pt-64 lg:order-none sm:pt-64 pt-32 sm:order-none md:order-1 md:pt-32">
                    <div className="relative w-full">
                    <Reveal>
                        <Image
                        src={ASSET_PATHS.guitar}
                        alt="guitar"
                        height={500}
                        width={500}
                        className="rounded-xl object-cover transition-transform duration-200 ease-in-out hover:md:scale-110"
                        />
                    </Reveal>
                    </div>
                </div>
                <div className="sm:pt-32 md:pb-3">
                    <div className="relative w-full mb-[2.5em]">
                    <Reveal>
                        <Image 
                            src={ASSET_PATHS.laptop}
                            height={500}
                            width={500}
                            alt="laptop"
                            className="rounded-xl object-cover transition-transform duration-200 ease-in-out hover:md:scale-110" />
                    </Reveal>
                    </div>
                    <div className="relative w-full">
                    <Reveal>
                        <Image 
                            src={ASSET_PATHS.plane}
                            height={500}
                            width={500}
                            alt="plane"
                            className="rounded-xl object-cover transition-transform duration-200 ease-in-out hover:md:scale-110" />
                    </Reveal>
                    </div>
                </div>
                <div className="pt-32 sm:pt-0 md:pt-3">
                    <div className="relative w-full mb-[2.5em]">
                    <Reveal>
                        <Image 
                            src={ASSET_PATHS.man}
                            height={500}
                            width={500}
                            alt="man"
                            className="rounded-xl object-cover transition-transform duration-200 ease-in-out hover:md:scale-110" />
                    </Reveal>
                    </div>
                    <div className="relative w-full">
                    <Reveal>
                        <Image 
                            src={ASSET_PATHS.fireworks}
                            height={500}
                            width={500}
                            alt="fireworks"
                            className="rounded-xl object-cover transition-transform duration-200 ease-in-out hover:md:scale-110" />
                    </Reveal>
                    </div>
                </div>
            </div>
        </div>
    )
}