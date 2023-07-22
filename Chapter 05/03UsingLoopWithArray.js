let num = [3,54,66,76,11,4];
for(let i = 0; i < num.length;i++){
  console.log(num[i]);
}
// For Each Loop
num.forEach((e) => {
  console.log(e+1);
})


// Array.from  - Used to create an array form any other object


let name = "Harry";
console.log(typeof  name);
console.log(name);
let arr = Array.from(name);
console.log(arr);
console.log(typeof arr);


// for......of - value
for(let i of num){
  console.log(i);
}

// for.....in - index
for(let i in num){
  console.log(i);
  console.log(num[i]);
}
