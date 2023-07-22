// Higher Order Functions
// Map - map() creates a new array from calling a function for every array element. map() does not execute the function for empty elements. 
let num = [11,2,3,4,15,6,17];

let a = num.map((value,i,arrr) => {
  console.log(value)
  console.log(i);
  console.log(arrr);
  return value + 1;
})
console.log(a);

// Filter - Filter an array with value that passes a test 

let a2 = num.filter((value) => {
    return value > 5;
})
console.log(a2);


// Reduce - The reduce() method executes a reducer function for array element. The reduce() method returns a single value.
let arr3 = [1,2,3,4,5,6];
let newarr = arr3.reduce((a,b) => {
  return a + b;
})
console.log(newarr);

// or
let arrrrrr = [2,2,2,2,2];
const reduce_func = (h1,h2) => {
  return h1 + h2;
}

let newarrrrrrrr = arrrrrr.reduce(reduce_func);
console.log(newarrrrrrrr);