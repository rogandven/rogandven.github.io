import { VALID_SIZE_REGEX } from "../constants/daisyui.constants";

export const validateSizeClass = (sizeClass: string, sizeNumber: number) => {
    sizeClass = sizeClass.trim().toLowerCase();
    if (!(VALID_SIZE_REGEX.test(sizeClass))) {
        throw Error(`invalid size: \`${sizeClass}\``);
    }
    const otherSizeNumber: number = Number(sizeClass.split("-")[1]);
    if (sizeNumber !== otherSizeNumber) {
        throw Error(`mismatching sizes: \`${sizeNumber}\` and \`${otherSizeNumber}\``)
    }
    return sizeClass;
};