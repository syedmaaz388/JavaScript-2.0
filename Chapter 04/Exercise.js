// Question 01 - What will the following print in JavaScript
console.log("Harr\'y".length);


// Question 02 - Explain the includes , startswith and endswith function of a string
const sentence = "The Quick brown for jumps over the lazy dog.";
const wordOne = 'jumps';
const wordTwo = "fox2";
console.log(sentence.includes(wordOne));
console.log(sentence.includes(wordTwo));
console.log(wordOne.startsWith("j"));
console.log(wordOne.endsWith("s"));


// Question 03 - Write a program to converta given string to lowercase
let str = "Hello Frands";
console.log(str.toLowerCase());

// Question 04 - Extract the amount out of this string
let str2 = "Please give Rs 1000";
let amount = Number.parseInt(str2.slice("Please give Rs".length));
console.log(amount);


// Question 05 - Try to change the 4th Character of string

// Ans - Nahi ho sakta (strings are immutable)
