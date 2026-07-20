import { DEFAULT_DESCRIPTION, DEFAULT_PROFICIENCY } from "../constants/tool.constants.ts";
import SocialLink from "./SocialLink.ts";
import { validateProficiency } from "../validations/tool.validations.ts";

export default class Tool extends SocialLink {
    private _description?: string = DEFAULT_DESCRIPTION;
    private _proficiency?: number = DEFAULT_PROFICIENCY;

    get description(): string {
       return this._description || DEFAULT_DESCRIPTION; 
    }
    set description(description: string) {
        this._description = description;
    }

    get proficiency(): number {
        return this._proficiency || DEFAULT_PROFICIENCY;
    }
    set proficiency(proficiency: number) {
        this._proficiency = validateProficiency(proficiency);
    }
};