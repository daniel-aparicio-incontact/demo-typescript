interface Animal {
    name: string;
    makeASound() : void;
}

class Cat implements Animal {
    constructor(
      public name: string
    ) {}
  
    makeASound(): void {
        console.log(`${this.getName} and I say miau`);
    }

    get getName(): string {
        return `My name is ${name}`;
    }
}

const cat = new Cat("Luna")
cat.makeASound()