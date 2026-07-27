import { VALID_LEVELS } from "../constants/language.constants"

export const getLevelNumber = (level: string): number => {
    return VALID_LEVELS.findIndex((element) => {
        return element === String(level);
    })
}

export const getCountryCode = (code: string): string => {
    return `flag:${code}-1x1`;
}