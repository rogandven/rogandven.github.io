import { VALID_LEVELS } from "../constants/language.constants.ts";

export const validateLevel = (level: string | undefined): string | undefined => {
    if (level === undefined) {
        return undefined;
    }
    level = level.toUpperCase().trim();
    if (!(VALID_LEVELS.includes(level))) {
        throw Error(`invalid level: \`${level}\``);
    }
    return level;
}