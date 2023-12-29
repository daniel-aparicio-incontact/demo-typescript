let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
console.log(changingString);
 
const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
console.log(constantString);



