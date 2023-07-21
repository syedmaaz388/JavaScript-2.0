const number = [42,33,11,17,28,31];

// delete number[0];
// console.log(number);
// console.log(number.length) - length kam nahi hogi


// Concat
let number2 = [1,2,3,4,5];
let number3 = [11,12,13,14,15];
let newArray = number.concat(number2,number3);
console.log(newArray);


// Sort() - Original Array ko Modify Kar dega

let a = [77,12,48,14,99,11,121];
// a.sort(); 
// console.log(a);
let compare = (a,b) => {
  return a - b
}
a.sort(compare);
console.log(a);

// Reverse
a.reverse();
console.log(a);

// Splice
let Myarr = [1,2,3,4,5,6,7,8,9];
Myarr.splice(2,3,44,55,66);
console.log(Myarr);

// Slice
const num = [1,2,3,4,5,6,7,8,9,10];
console.log(num.slice(0,5));
console.log(num);
console.log(num.slice(5));