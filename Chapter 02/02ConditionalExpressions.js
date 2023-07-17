let a = "55";
let n = Number.parseInt(a);
console.log(n);
console.log(typeof a)
console.log(typeof n);

if(n > 18){
  console.log("Adult");
}else if(n > 0){
  console.log("Valid Age");  
}else if(n > 60){
  console.log("Old Man");
}else{
  console.log("Enter Valid Age");
}


if(n > 10){
  console.log("Ye Bhi Chalega");
}
if(n > 11){
  console.log("Ye Bhi Chalega");
}
if(n > 12){
  console.log("Ye Bhi Chalega");
}
if(n > 13){
  console.log("Ye Bhi Chalega");
}
if(n > 14){
  console.log("Ye Bhi Chalega");
}

// Ternary Operator
let marks = 90;
let result  = marks > 75 ? "Good" :"Can do better";
console.log(result);
console.log("You Makrs are",(marks > 75 ? "Good" : "Not Good"));



// Switch
const fruits = "Apple";
switch (fruits) {
  case "Orange":
    console.log("Orange")
    break;
  case "Apple":
    console.log("Red")
    break;
  case "Banana":
    console.log("yellow")
    break;
  default:
    console.log("Enter a Valid");
    break;
}