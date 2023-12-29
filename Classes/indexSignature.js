class MyClass {
    check(s) {
        return this[s];
    }
}
class MyExtendedClass extends MyClass {
    constructor() {
        super();
        this.isValid = false;
        this.canBeValid = true;
    }
}
const classVal = new MyExtendedClass();
console.log(classVal.check("value"));
console.log(classVal.check("isValid"));
console.log(classVal.check("canBeValid"));
