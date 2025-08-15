import { HighlightStart } from "@/common/Highlight/Highlight";
import { Reveal } from "@/common/Reveal/Reveal";
import { ABOUT_ME, ABOUT_TEXT } from "@/constants";

export default function Biography() {
    return (
        <div className="w-full mt-[2em] sm:mt-0">
            <div className="wraper max-w-[30em] px-5 md:ms-auto md:me-auto lg:me-10 ">
                <Reveal>
                <div className="mb-10">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl text-zinc-800 tracking-tight">
                        {ABOUT_ME}
                    </h1>
                    <HighlightStart/>
                </div>
                </Reveal>
                <Reveal>
                    <p className="text-sm sm:text-base text-gray-600 lg:text-lg font-medium">I 
                        {ABOUT_TEXT}
                    </p>
                </Reveal>
            </div>
        </div>
    )
}