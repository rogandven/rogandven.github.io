import { DEFAULT_DISPLAY_NAME, DEFAULT_ICON, DEFAULT_SLUGGIFIED_NAME, DEFAULT_URL } from "../constants/sociallink.constants.ts";
import { slugify } from "../utils/general.utils.ts";
import { validateAbsolutePath } from "../validations/general.validations.ts";

export default class SocialLink {
    private _displayName?: string = DEFAULT_DISPLAY_NAME;
    private _sluggifiedName?: string = DEFAULT_SLUGGIFIED_NAME;
    private _icon?: (_props: Record<string, any>) => any = DEFAULT_ICON;
    private _url?: string = DEFAULT_URL;

    get displayName(): string {
        return this._displayName || DEFAULT_DISPLAY_NAME;
    }
    set displayName(displayName: string) {
        this._displayName = displayName;
        this._sluggifiedName = slugify(String(this._displayName));
    }

    get sluggifiedName(): string {
        return this._sluggifiedName || DEFAULT_SLUGGIFIED_NAME;
    }

    get icon(): (_props: Record<string, any>) => any {
        return this._icon || DEFAULT_ICON;
    }
    set icon(icon: (_props: Record<string, any>) => any) {
        this._icon = icon;
    }

    get URL(): string {
        return String(this._url);
    }
    set URL(url: string) {
        this._url = validateAbsolutePath(url);
    }

    constructor(name: string = DEFAULT_DISPLAY_NAME, icon: (_props: Record<string, any>) => any = DEFAULT_ICON, url: string) {
        this.displayName = name;
        this.icon = icon;
        this.URL = url;
    }
};