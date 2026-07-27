import { slugify } from "../utils/general.utils";

export const headingTitleCopier = (anyObject: any) => {
    if (!(anyObject instanceof HeadingTitle)) {
        console.warn("¡El objeto dado no corresponde a un título!");
        return undefined;
    }
    return new HeadingTitle(anyObject.normalTitle, anyObject.oldIconName);
}

export default class HeadingTitle {
    private _normalTitle: string = "";
    private _sluggifiedTitle: string = "";
    private _iconName: string = "mdi:hamburger";
    
    set title(title: string) {
        this._normalTitle = title;
        this._sluggifiedTitle = slugify(this._normalTitle);
    }
    get normalTitle(): string {
        return this._normalTitle;
    }
    get sluggifiedTitle(): string {
        return this._sluggifiedTitle;
    }

    set iconName(iconName: string) {
        console.log(`oldIconName: ${iconName}`);
        if (iconName === "roger") {
            this._iconName = "roger";
        } else {
            this._iconName = "mdi:" + iconName;
        }
        console.log(`newIconName: ${this._iconName}`);
    }
    get iconName(): string {
        return this._iconName;
    }
    get oldIconName(): string {
        if (this._iconName.includes(":")) {
            return this._iconName.split(":")[1];
        }
        return this.iconName;
    }

    constructor(title: string = "", iconName: string = "hamburger") {
        this.title = title;
        this.iconName = iconName;
    }
};