import {EObject} from "./EObject";
import {String} from "./String";

export class HashMap<Key extends EObject, Value extends EObject> {
    hashMap: Map<Key, Value>;

    constructor() {
        this.hashMap = new Map();
        let randomMap = new HashMap<String, String>();
    }

    set(key: Key, value: Value): void {
        this.hashMap.set(key, value);
    }
}