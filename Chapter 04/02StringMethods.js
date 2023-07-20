// Strings Methods

let name = "Harry";
console.log(name.length); //Property
for(let i = 0; i < name.length; i++){
  console.log(name[i]);
}

console.log(name.toUpperCase()); //Method
let newName = name.toUpperCase();
console.log(newName + " Hi");
console.log(name);
console.log(name.toLowerCase());
console.log(name);

console.log(name.slice(1, 4));
console.log(name.slice(0));
console.log(name);

let name2 = "Harry Bhai";
console.log(name2.replace("Bhai", "Bhau"));

let name01 = "Harry";
let name02 = "Naman";
let name3 = name01.concat(name02, " Yes ", "Ji ", "Ha", " Ji ", " Ha ");
console.log(name3);

let sentance = "    Hi How are you   ";
console.log(sentance.trim());   // Remove White Spaces



// Strings are Immutable -  we cannot change it


