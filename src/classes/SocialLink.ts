import { DEFAULT_DISPLAY_NAME, DEFAULT_ICON, DEFAULT_SLUGGIFIED_NAME, DEFAULT_URL } from "../constants/sociallink.constants.ts";
import { slugify } from "../utils/general.utils.ts";
import { validateAbsolutePath } from "../validations/general.validations.ts";

export default class SocialLink {
    private _displayName?: string = DEFAULT_DISPLAY_NAME;
    private _sluggifiedName?: string = DEFAULT_SLUGGIFIED_NAME;
    private _icon?: (_props: any) => any = DEFAULT_ICON;
    private _url?: string = DEFAULT_URL;
    private _username?: string = DEFAULT_SLUGGIFIED_NAME;

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

    get icon(): (_props: any) => any {
        return this._icon || DEFAULT_ICON;
    }
    set icon(icon: (_props: any) => any) {
        this._icon = icon;
    }

    get URL(): string {
        return String(this._url);
    }
    set URL(url: string) {
        this._url = validateAbsolutePath(url);
    }

    get username(): string {
        return String(this._username);
    }
    set username(username: string) {
        this._username = username;
    }    

    constructor(name: string = DEFAULT_DISPLAY_NAME, icon: (_props: Record<string, any>) => any = DEFAULT_ICON, url: string, username: string) {
        this.displayName = name;
        this.icon = icon;
        this.URL = url;
        this.username = username;
    }
};