console.log("Hello");
console.warn("warning");
console.error("Error");
let obj = {
  id:1,
  id:2,
  id:3
}
console.table(obj);
console.assert(5 > 54); 

// console.clear();
console.time("forloop");
for(let  i = 0; i < 10;i++){
  console.log(i);
}
console.timeEnd("forloop"); 
