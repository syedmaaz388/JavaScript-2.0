// Question 01 - Create an array of numbers and take input from the user to add number from the array
let arr = [1,2,3,4,5,6,7,8,9];
let a = prompt("Enter a number: ");
a = Number.parseInt(a);
arr.push(a);

// Question 02 - Keep adding numbers to the array in until 0 is added to the array
let arr = [1,2,3,4,5];
let a;
do{
  a = prompt("Enter a number: ");
  a = Number.parseInt(a);
  arr.push(a);
}
while(a != 0);
console.log(arr);

// Question 03 - Filter for numbers divisible by 10 from a given array
let myArray = [10,12,30,44,50,600,17,89,99,10];
let newArray = myArray.filter((x) => {
     return x % 10 == 0;
})
console.log(newArray);

// Question 04 - Create an array of square of given numbers
let array = [1,2,3,4,5,6,7];
let n = array.map((x) => {
    return x * x;
})
console.log(n);


// Question 05 - Use reduce to calculate factorial of given number form an array of first n natural numbers.
let arr = [1,2,3,4,5];
let newwarrrr = arr.reduce((x,y) => {
  return x * y;
})
console.log(newwarrrr);