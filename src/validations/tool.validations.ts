import { MAX_PROFICIENCY, MIN_PROFICIENCY } from "../constants/tool.constants"

export const validateProficiency = (proficiency: number): number => {
    if (proficiency < MIN_PROFICIENCY) {
        return MIN_PROFICIENCY;
    }
    if (proficiency > MAX_PROFICIENCY) {
        return MAX_PROFICIENCY;
    }
    return proficiency;
}