// Symbol
//  is a unique and immutable primitive value that can be used as an identifier for object properties.
// Main =>>>>>>>>
// Unlike other property keys, which are usually strings, symbols do not appear in for-in loops or other standard object enumeration methods, making them a good choice for defining properties that should not be accidentally accessed or overwritten.

let sym = Symbol("id");
// console.log(sym); // Symbol(id)

let id = Symbol("id");
let obj = {
    name: "Omi",
    age: 21
    // [id]: 1,
};
obj[id] = 1,

console.log(obj); // { name: 'Omi', [Symbol(id)]: 1 }

for (let key in obj) {
    console.log(key);
}
// Note: we not getting Symbol we cannot get it, it is hidden property

// For accessing Symbol
// 1. Direct Access Using the Symbol
console.log(obj[id]); // 1

// 2. Using Object.getOwnPropertySymbols()
// This method can be used to retrieve all symbol properties of an object:

let id2 = Symbol("id");
let anotherId = Symbol("anotherId");

let obj2 = {
    name: "Omi",
    age: 21,
    [id]: 1,
    [anotherId]: 2
};

// Retrieve all symbol properties
let symbols = Object.getOwnPropertySymbols(obj2);

console.log(symbols); // Outputs: [ Symbol(id), Symbol(anotherId) ]