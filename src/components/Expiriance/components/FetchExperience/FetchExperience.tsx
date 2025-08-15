"use client"
import useFetch from "@/customHooks/useFetch/useFetch";
import { HightlightBox, RegularBox } from "../../layout/ExperianceBox";
import Fallback from "../Fallback/Fallback";
import { Reveal } from "@/common/Reveal/Reveal";
import { getExperienceSplit, getFormatedDate } from "@/lib/getExperianceHelpers";
import { EducationLink, FetchExperienceProps } from "./FetchExperience.interface";

export default function FetchExperience({fetch}: FetchExperienceProps) {
    const { data, loading, error } = useFetch({ fetchFn: fetch })

    if(loading){
        return <Fallback/>;
    } else if(error){
        return(
            <RegularBox>
                <p className="text-red-500">{error}</p>
            </RegularBox>
        );
    } else if(data){
        console.log(data);
        return Array.isArray(data) && data.map((item, index) => (
            index !== 0 ? 
                <Reveal key={`container-${item.id}`}>
                    <RegularBox>
                        <div className="mb-2 flex flex-wrap gap-x1 justify-between items-start">
                            <h4 className="font-medium text-base sm:text-lg">{item.role}</h4>
                            <span className="text-xs sm:text-sm text-indigo-100/60">
                                { !item.start_date ? "" : item.end_date ? 
                                getFormatedDate(item.start_date) + ' - ' + getFormatedDate(item.end_date) :
                                getFormatedDate(item.start_date) + " - Present" }
                            </span>
                        </div>
                        <p className="text-indigo-100/60 mb-4 text-xs sm:text-sm">{item.place}</p>
                        <ul className="space-y-2 pl-5 text-xs sm:text-sm list-disc  ">
                            {item.description && getExperienceSplit(item.description).map((desc: string, descIndex: number) => (
                                <li key={`section-${descIndex}`} className="opacity-80">
                                    {desc}
                                </li>
                            ))}
                            { item.education_links && item.education_links.map((linkItem:EducationLink) => (
                                <li key={`link-${linkItem.id}`} className="opacity-80 hover:opacity-100 active:opacity-100 transition-opacity">
                                    <a href={linkItem.link} target="_blank" rel="noopener noreferrer" className="me-2">
                                        {linkItem.name}
                                    </a>
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </li>
                            ))}
                        </ul>
                    </RegularBox>
                </Reveal> : 
                <HightlightBox key={`first-${item.id}`}>
                    <div className="mb-2 flex flex-wrap gap-x1 justify-between items-start">
                        <h4 className="font-medium text-base sm:text-lg">{item.role}</h4>
                        <span className="text-xs sm:text-sm text-indigo-100/60">
                            { !item.start_date ? "" : item.end_date ? 
                                getFormatedDate(item.start_date) + ' - ' + getFormatedDate(item.end_date) :
                                getFormatedDate(item.start_date) + " - Present" }
                        </span>
                    </div>
                    <p className="text-indigo-100/60 mb-4 text-xs sm:text-sm">{item.place}</p>
                    <ul className="space-y-2 pl-5 text-xs sm:text-sm list-disc  ">
                        {item.description && getExperienceSplit(item.description).map((desc: string, descIndex: number) => (
                            <li key={`section-${descIndex}`} className="opacity-80">
                                {desc}
                            </li>
                        ))}
                        { item.education_links && item.education_links.map((linkItem:EducationLink) => (
                            <li key={`link-${linkItem.id}`} className="opacity-80 hover:opacity-100 active:opacity-100 transition-opacity">
                                <a href={linkItem.link} target="_blank" rel="noopener noreferrer" className="me-2">
                                    {linkItem.name}
                                </a>
                                <i className="bi bi-box-arrow-up-right"></i>
                            </li>
                        ))}
                    </ul>
                </HightlightBox>
            
        ))
    }
}