"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HashMap {
    constructor() {
        this.hashMap = new Map();
        let randomMap = new HashMap();
    }
    set(key, value) {
        this.hashMap.set(key, value);
    }
}
exports.HashMap = HashMap;
