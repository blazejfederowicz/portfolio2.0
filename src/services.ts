"use server"
import { API_ROUTES, ERROR_MESSAGES } from "./constants";

export const getExperience = async () => {
    const response = await fetch(API_ROUTES.EXPERIENCE);

    if (!response.ok) {
        throw new Error(ERROR_MESSAGES.FETCH_EXPERIENCE);
    }

    return response.json(); 
};

export const getEducation = async () => {
    const response = await fetch(API_ROUTES.EDUCATION);

    if (!response.ok) {
        throw new Error(ERROR_MESSAGES.FETCH_EDUCATION);
    }

    return response.json(); 
};