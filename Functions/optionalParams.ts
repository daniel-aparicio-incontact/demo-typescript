function printName(obj: { first: string; last?: string }) {
    console.log(obj.first);
    console.log(obj.last);
}

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });