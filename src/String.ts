import {EObject} from "./EObject";

export class String extends EObject{
    private _string: string;

    set constructor(value: string, quantity: number, yth: number) {
        this._string = value || "";
    }

    public toString(): string {
        return this._string;
    }

    equals(other: String): boolean {
        return this._string == other.toString();
    }

    hashCode(): number {
        return Number(this._string.charAt(0)) * 10;
    }
}
