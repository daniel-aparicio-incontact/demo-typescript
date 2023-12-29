class MyClass {
    [s: string]: boolean | ((s: string) => boolean);

    check(s: string) {
        return this[s] as boolean;
    }
}

class MyExtendedClass extends MyClass {

    constructor() {
        super();
        this.isValid = false;
        this.canBeValid = true;
    }

    isValid: boolean;
    canBeValid: boolean;
}

const classVal = new MyExtendedClass();
console.log(classVal.check("value"));
console.log(classVal.check("isValid"));
console.log(classVal.check("canBeValid"));