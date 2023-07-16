// Question 01 -  Create a variable of type string and try to add a number to it.
let str1 = "Harry";
let str2 =  6;
console.log(str1 + str2);

// Question 02 - Use typeof operator to find the datatype of the string in last question
console.log(typeof (str1 + str2));

// Question 03 - Create a const object in JavaScript Can you Change it to hold a number later ?
const a = {
  name:"Harry",
  age:30
}
// a = 22;  Nahi Hoga
a["age"] = 29;  //Uske andar ki value change hogi
a.name = "Harish Ali Khan"
console.log(a);

// Question 4 Try to add a new key to the const object in problem 3 were you able to do it
a.goodteacher = true;
console.log(a);

// Question 5 - Ek Dictionary Banao 5 words ki

const dict = {
  Coding:"Coding is the process of allowing humans to speak to computers.",
  Programming:"A programming language is a computer language that is used by programmers (developers) to communicate with computers.",
  Dijkstrasalgorithm : "Dijkstras Shortest Path Algorithm" ,
  Datastructure:"Data structure is a storage that is used to store and organize data",
  DataBase:"A database is an organized collection of structured information, or data, typically stored electronically in a computer system."
}