import { ICON_PREFIX } from "../constants/general.constants";
import { getIconName } from "../utils/general.utils";
import { validatePositive, validateString } from "../validations/general.validations";

export default class Stat {
    private _iconName: string = "md:book";
    private _title: string = "Default";
    private _amount: number = 0;
    private _description: string | undefined = "Default"; 

    constructor(iconName: string, title: string, amount: number, description: string | undefined) {
        this.iconName = iconName;
        this.title = title;
        this.amount = amount;
        this.description = description;
    }

    set iconName(iconName: string) {
        if(!iconName.startsWith(ICON_PREFIX)) {
            this._iconName = getIconName(iconName);
        }
        this._iconName = iconName;
    }
    get iconName(): string {
        return this._iconName;
    }

    set title(title: string) {
        this._title = String(validateString(title, "title"));
    }
    get title(): string {
        return this._title;
    }

    set amount(amount: number) {
        this._amount = validatePositive(amount, "amount");
    }
    get amount(): number {
        return this._amount;
    }

    set description(description: string | undefined) {
        this._description = validateString(description, "description");
    }
    get description(): string | undefined {
        return this._description;
    }
};