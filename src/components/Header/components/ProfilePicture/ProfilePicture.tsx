import { Reveal } from "@/common/Reveal/Reveal";
import { AVALIABLE } from "@/constants";

export default function ProfilePicture() {
    return(
        <div className=" hidden sm:flex items-center justify-center lg:justify-end">
            <Reveal>
                <div className=" relative bg-[url(/assets/profile.jpg)] transition-shadow duration-200 ease-in hover:shadow-[-10px_20px_20px_rgba(249,116,22,0.3)] bg-cover rounded-2xl lg:rounded-full border-2 border-amber-600 bg-no-repea bg-[50%_20%] overflow-visible lg:bg-center w-[404px] md:w-[485px] h-[10em] md:h-[15em] lg:w-[18em] lg:h-[18em] xl:h-[25em] xl:w-[25em]">
                    <Reveal>
                        <div className=" xl:scale-100 lg:scale-75 lg:-translate-y-5 xl:-translate-7 lg:-translate-11 text-xl -rotate-10 hidden lg:flex justify-center items-center absolute px-4 py-3 shadow-[0px_0px_5px_#c084fc] shadow-green-400 border-2 rounded-4xl border-purple-400 text-purple-300 ">
                            <div className="w-2 h-2 shadow-[0px_0px_5px_#c084fc] rounded-full bg-purple-400 me-2"> </div>
                            <span>{AVALIABLE}</span>
                        </div>
                    </Reveal>
                </div>
            </Reveal>
        </div>
    )
}