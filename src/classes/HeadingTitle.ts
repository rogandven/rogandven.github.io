import { slugify } from "../utils/general.utils";

export default class HeadingTitle {
    private _normalTitle: string = "";
    private _sluggifiedTitle: string = "";

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

    constructor(title: string = "") {
        this.title = title;
    }
};