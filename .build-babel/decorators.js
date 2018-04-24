'use strict';

function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

let Cat = class Cat {
    // @readonly
    meaw() {
        return `${this.name} says Meaw!`;
    }
    constructor(name) {
        this.name = name;
    }
};


const cat = new Cat('Sima');
console.log(cat.meaw());

cat.meaw = () => {};