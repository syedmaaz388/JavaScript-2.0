for(let i = 1; i <= 10;i++){
  console.log(i);
}


// Program to add first n natural numbers
let sum = 0;
let n = 10;
for(let i = 0; i < n;i++){
  sum = sum +  i;
}
console.log(sum);


// For in loop
let obj = {
  harry:90,
  shubh:45,
  sahil:56,
  ritik:57
}
for(let a in obj){
  console.log(a);
}
for(let a in obj){
  console.log(obj[a]);
}

// For of
let arr = [1,2,3,4,5]
for(let b of arr){
  console.log(b)
}