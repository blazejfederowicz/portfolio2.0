import { Reveal } from "@/common/Reveal/Reveal";
import { SkillsProps } from "./Skills.interface";
import PercentageAnimation from "@/customHooks/usePercentageAnim/usePercentageAnim";
import { BACKEND_SKILLS, FRONTEND_SKILLS } from "@/constants";

export default function Skills({frontend, backend}: SkillsProps) {
    return (
        <div className="col-start-1 w-full order-5 mb-10 md:mb-0 md:order-1">
            {frontend ? FRONTEND_SKILLS.map((skill,index)=>(
            <div className="mb-5" key={index}>
            {index !== FRONTEND_SKILLS.length-1? (<>
                <div className="flex justify-between content-center px-1">
                    <Reveal>
                        <h4 className="font-bold">{skill.name}</h4>
                    </Reveal>
                    <h4 className="font-bold">
                        <Reveal>
                            <h4 className="font-bold">{skill.value}</h4>
                        </Reveal>
                    </h4>
                </div>
                <div className="h-[0.5em] mt-1 rounded-2xl bg-blue-200">
                    <div className={`bg-blue-600 duration-600 ease-out ${'w-['+skill.value+']'} h-[100%] rounded-2xl`}></div>
                </div>
           </> ) : (<>
                <div className="flex justify-between content-center px-1">
                    {Array.isArray(skill.name) && skill.name.map((e,i) => (
                        <Reveal key={i}>
                            <h4 className="font-bold">{e}</h4>
                        </Reveal>
                    ))}
                </div>
                <div className="h-[0.5em] mt-1 rounded-2xl bg-cyan-500">
                    <div className={`bg-purple-700 w-[${Array.isArray(skill.value) && skill.value[0]}] h-[100%] rounded-2xl`}></div>
                </div>
                <div className="flex justify-between content-center px-1">
                    {Array.isArray(skill.value) && skill.value.map((e,i) => (
                        <Reveal key={i}>
                            <h4 className="font-bold">{e}</h4>
                        </Reveal>
                    ))}
                </div>
            <div className={`absolute bottom-0 w-full transition-transform ${frontend?'translate-y-[5em] delay-[430ms] ease-in':'translate-y-[0em] duration-500 ease-out'} left-0 bg-gradient-to-t h-[5em] from-gray-50 to-transparent `}></div>
            </>)}
            
            </div>
            )) : BACKEND_SKILLS.map((skill,index)=>(
                <div className="mb-5" key={index}>
                    <div className="flex justify-between content-center px-1">
                        <Reveal>
                        <h4 className="font-bold">{skill.name}</h4>
                        </Reveal>
                        <h4 className="font-bold">
                            <Reveal>
                            {
                                <h4 className="font-bold">{skill.value}</h4>
                            }
                            </Reveal>
                        </h4>
                    </div>
                    <div className="h-[0.5em] mt-1 rounded-2xl bg-blue-200">
                        <div className={`bg-blue-600 duration-600 ease-out ${!!skill.value ?'w-['+skill.value+']':''} h-[100%] rounded-2xl`}></div>
                    </div>
                </div>
            ))}
        </div>
    )
}