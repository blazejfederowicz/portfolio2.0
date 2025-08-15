export const getFormatedDate = (date: string) => {
    const monthShortName = new Date(date).toLocaleString('en-US', { month: 'short' });
    const year = new Date(date).getFullYear();
    return `${monthShortName} ${year}`;
}

export const getExperienceSplit = (experience:string)=>{
    return experience.split("- ").filter(Boolean);
}