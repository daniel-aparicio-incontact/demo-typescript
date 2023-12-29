abstract class Animal2 {
    constructor(name: string) {}
  
    abstract makeASound(): void;
}

class Dog extends Animal2 {
    constructor(
      name: string
    ) {
      super(name)
    }
  
    makeASound(): void {
        console.log(`${this.getName} and I say woof`)
    }

    get getName(): string {
        return `My name is ${name}`;
    }
}

const dog = new Dog("Fenrir")
dog.makeASound()