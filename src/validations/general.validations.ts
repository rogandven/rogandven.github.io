import { string } from "astro:schema"
import { UNIX_PATH_REGEX } from "../constants/general.constants";

export const validateString = (str: string | undefined, fieldName: string): string | undefined => {
    if (str === undefined) {
        return str;
    }
    str = str.trim();
    if (str.length <= 0) {
        throw Error(`"${fieldName}" cannot be empty`);
    }
    return str;
}

export const validateRelativePath = (str: string | undefined) => {
    if (str === undefined) {
        return undefined;
    }
    if (!UNIX_PATH_REGEX.test(str)) {
        throw Error(`invalid path: "${str}"`);
    }
    return str;
}

export const validateAbsolutePath = (str: string | undefined) => {
    if (str === undefined) {
        return undefined;
    }
    str = str.trim();
    const newURL = new URL(str);
    return newURL.toString();
}