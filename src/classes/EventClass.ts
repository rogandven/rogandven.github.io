import { DEFAULT_EVENT_NAME } from "../constants/event.constants.ts";
import { DEFAULT_DATE, ICON_PREFIX } from "../constants/general.constants.ts";
import { getUNIXDate } from "../utils/general.utils.ts";
import { validateAbsolutePath, validateRelativePath, validateString } from "../validations/general.validations.ts";
import { slugify } from "../utils/general.utils.ts";

export default class EventClass {
    private _companyName: string | undefined = undefined;
    private _name: string = DEFAULT_EVENT_NAME;
    private _description: string | undefined = undefined;
    private _imageURL: string | undefined = undefined;
    private _location: string | undefined = undefined;
    private _startDate: number = getUNIXDate(DEFAULT_DATE);
    private _endDate: number | undefined = undefined;
    private _repositoryURL: string | undefined = undefined;
    private _certificateURL: string | undefined = undefined;
    private _iconName: string | undefined = undefined;

    get companyName(): string | undefined {
        return this._companyName;
    }
    set companyName(companyName: string | undefined) {
        this._companyName = companyName;
    }

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = String(validateString(name, "name"));
    }

    get description(): string | undefined {
        return this._description;
    }
    set description(description: string | undefined) {
        this._description = validateString(description, "description");
    }

    get imageURL(): string | undefined {
        return this._imageURL;
    }
    set imageURL(imageURL: string | undefined) {
        this._imageURL = validateRelativePath(imageURL);
    }

    get location(): string | undefined {
        return this._location;
    }
    set location(location: string | undefined) {
        this._location = validateString(location, "location");
    }

    get startDate(): Date {
        return new Date(this._startDate);
    }
    set startDate(startDate: string) {
        this._startDate = getUNIXDate(startDate);
    }

    get endDate(): string | undefined {
        if (this._endDate === undefined) {
            return undefined;
        }
        return new Date(this._endDate).toLocaleDateString();
    }
    set endDate(endDate: string | undefined) {
        if (endDate === undefined) {
            this._endDate = undefined;
            return;
        }
        this._endDate = getUNIXDate(endDate);
    }

    get repositoryURL(): string | undefined {
        return this._repositoryURL;
    }
    set repositoryURL(repositoryURL: string | undefined) {
        this._repositoryURL = validateAbsolutePath(repositoryURL);
    }

    get certificateURL(): string | undefined {
        return this._certificateURL;
    }
    set certificateURL(certificateURL: string | undefined) {
        this._certificateURL = validateAbsolutePath(certificateURL);
    }

    get iconName(): string | undefined {
        return this._iconName
    }
    set iconName(iconName) {
        if (iconName === undefined) {
            this._iconName = undefined;
            return;
        }
        this._iconName = ICON_PREFIX + String(validateString(slugify(iconName), "iconName"));
    }

    constructor(
        companyName: string | undefined = undefined, 
        name: string = DEFAULT_EVENT_NAME, 
        description: string | undefined = undefined, 
        imageURL: string | undefined = undefined, 
        location: string | undefined = undefined, 
        startDate: string = DEFAULT_DATE, 
        endDate: string | undefined = undefined, 
        repositoryURL: string | undefined = undefined, 
        certificateURL: string | undefined = undefined, 
        iconName: string | undefined = undefined
    ) {
        this.companyName = companyName;
        this.name = name;
        this.description = description;
        this.imageURL = imageURL;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
        this.repositoryURL = repositoryURL;
        this.certificateURL = certificateURL;
        this.iconName = iconName;
    }
};