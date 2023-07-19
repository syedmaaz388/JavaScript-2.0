// Question 01 - Write a program to print the marks of a student in an object using for loop

let marks = {
  Harry:90,
  Prachi:91,
  Alex:89,
  Max:97
}
for(let i in marks){
  console.log(i + " = " + marks[i]);
}
// Question 02 - Write the program to print "try again" until the user enters the correct number
// let correctNumber = 7;
// let i;
// while(i != correctNumber){
//   i = prompt("Enter a number")
  // console.log("try again") 
// }
// console.log("You have enter the correct number");

// Question 03 - Write a function to find mean of 4 numbers

let mean = (a,b,c,d) => {
    return (a + b + c + d)/4;
}
console.log(mean(1,2,3,4));