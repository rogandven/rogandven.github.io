import { validateString } from "../validations/general.validations.ts";
import { DEFAULT_LANGUAGE_NAME, DEFAULT_LEVEL, MAX_LEVEL, NATIVE_STRING, UNDEFINED_STRING } from "../constants/language.constants.ts";
import { validateLevel } from "../validations/language.validations.ts";
import { getLevelNumber } from "../utils/language.utils.ts";

export default class Language {
    private _name: string = DEFAULT_LANGUAGE_NAME;
    private _level: string | undefined = DEFAULT_LEVEL;
    private _isNative: boolean = false;
    
    set name(name: string) {
        this._name = String(validateString(name, "name"));
    }
    get name(): string {
        return this._name;
    }

    set level(level: string) {
        this._level = validateLevel(level);
    }
    get levelString(): string {
        if (this._isNative) {
            return NATIVE_STRING;
        }
        if (!(this._level)) {
            return UNDEFINED_STRING;
        }
        return String(this._level);
    }
    get levelNumber(): number {
        if (this._isNative) {
            return MAX_LEVEL;
        }
        return getLevelNumber(this._level || "");
    }
    get level(): string {
        return this.levelString;
    }

    set isNative(isNative: boolean) {
        this._isNative = isNative;
    }
    get isNative(): boolean {
        return this._isNative;
    }
};