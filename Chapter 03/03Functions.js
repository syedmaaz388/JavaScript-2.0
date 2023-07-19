// Function
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).


function sum(a,b){
    console.log(a + b);
}
sum(5,5);
sum(8,65);
sum(99,12);

function multiply(a,b){
  return  a * b;
}
console.log(multiply(9,9));
console.log(multiply(2,2));
console.log(multiply(7,7));


// Arrow Functions
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:
// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
let sumOne = (a,b) => {
   return a + b;
}
let ans = sumOne(101,199);
console.log(ans);
console.log(sumOne(10,10));
// or
let sumTwo = (a,b) =>  a + b;
let ans2 = sumTwo(2,2);
console.log(ans2);
