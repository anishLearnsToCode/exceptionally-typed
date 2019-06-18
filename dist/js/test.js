"use strict";
String.prototype.reverse = function () {
    let reversedString = '';
    for (let index = this.length - 1; index >= 0; index--) {
        reversedString += this.charAt(index);
    }
    return reversedString;
};
console.log('anish'.reverse());
