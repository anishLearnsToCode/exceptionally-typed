String.prototype.reverse = function (this: string) {
    let reversedString = '';
    for (let index = this.length - 1; index >= 0; index--) {
        reversedString += this.charAt(index);
    }

    return reversedString;
};

console.log('anish'.reverse());
