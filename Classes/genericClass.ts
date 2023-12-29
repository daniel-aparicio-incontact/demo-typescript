class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
  display(): void { 
    console.log(typeof(this.zeroValue));
  }
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
console.log(myGenericNumber.add(5,6));
myGenericNumber.display();



let myGenericNumber2 = new GenericNumber<BigInt>();
myGenericNumber2.zeroValue = BigInt(0);
myGenericNumber2.add = function (x, y) {
  return x.valueOf() + y.valueOf();
};
console.log(myGenericNumber2.add(BigInt(5384842222842),BigInt(6292222239394)));
myGenericNumber2.display();