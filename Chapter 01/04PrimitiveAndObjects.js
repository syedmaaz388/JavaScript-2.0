// Primitive Data Types
// N - Null 
// N - Number
// S - Symbol
// S - String
// B - Boolean
// B - BigInt
// U - Undefined 



let a = null;
let b = 345;
let c = true;
let d = BigInt("576") + BigInt("4");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;

console.log(a,b,c,d,e,f,g);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

let aa;
console.log(typeof aa);

// Object
const item = {
  name:"Syed Maaz",
  age:23
}
console.log(item["name"]);
console.log(item["age"]);
// Or
console.log(item.name);
console.log(item.age);
item.name ="Syed Maaz Siraj";  // Update
console.log(item.name)

// Arrays and functions are also object