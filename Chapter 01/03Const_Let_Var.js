// Var is globally scoped while let and const are block scoped

{
  var a = 45;
}
a = 40;
console.log(a);
{
let a1 = 44;
a1 = 60;
console.log(a1);
}
a1 = 70;
console.log(a1)
// console.log(a1)


const author = "Maaz";
// author = "Manu"; cannot be re-declared or changed
console.log(author);
