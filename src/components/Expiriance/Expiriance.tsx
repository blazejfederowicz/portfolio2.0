import {  HighlightStart } from "@/common/Highlight/Highlight";
import { Reveal } from "@/common/Reveal/Reveal";
import { COMPONENTS_IDS, EDUCATION_TITLE, EXPERIENCE_TITLE } from "@/constants";
import FetchExperience from "./components/FetchExperience/FetchExperience";
import { getEducation, getExperience } from "@/services";

const Expiriance = ()=>{
    return(
        <>
            <section id={COMPONENTS_IDS.EXPIRIANCE} className="container mx-auto px-5 sm:px-6 lg:px-8 pb-20 md:pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-lg lg:max-w-5xl mx-auto">
                    <div className="space-y-6 mb-10 lg:mb-0">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl lg:text-4xl text-gray-200">{EXPERIENCE_TITLE}</h2>
                            <HighlightStart/>
                        </Reveal>
                        <FetchExperience fetch={getExperience}/>
                    </div>
                    <div className="space-y-6">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl lg:text-4xl font-bold text-gray-200">{EDUCATION_TITLE}</h2>
                            <HighlightStart/>
                        </Reveal>
                        <FetchExperience fetch={getEducation}/>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Expiriance;