class Base {
    greet() {
      console.log("Hello, world!");
    }
}
   
class Derived extends Base {
    greet(name?: string) {
      if (name === undefined) {
        super.greet();
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
}
   
const derivedClass = new Derived();
derivedClass.greet();
derivedClass.greet("reader");