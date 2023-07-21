// Array Methods

let num = [17,42,31,5,4,22];
let b = num.toString();
console.log(b);
console.log(typeof b);

let c = num.join(" - ");
console.log(c);
console.log(typeof c);

num.pop();  // remove last element
console.log(num);

num.push(22);  // Add in last
console.log(num);

num.shift(); // Remove first element
console.log(num);

num.unshift(55); // Add element in first position
console.log(num);

console.log(delete num[2]);  //Delete karne ke liye 
console.log(num);