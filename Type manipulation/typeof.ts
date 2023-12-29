console.log(typeof "Hello world");

function f() {
    return { x: 10, y: 3 };
}
type ValTest = ReturnType<typeof f>;