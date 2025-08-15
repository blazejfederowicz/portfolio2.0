export interface FetchExperienceProps {
    fetch: () => Promise<any>;
}

export interface EducationLink { 
    id: string | number; 
    link: string; 
    name: string 
}