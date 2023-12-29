function getTypeOfArg<Type>(arg: Type): void {
    console.log(typeof(arg));
}

console.log("First call");
getTypeOfArg<string>("myString");

console.log("Second call");
getTypeOfArg(1);