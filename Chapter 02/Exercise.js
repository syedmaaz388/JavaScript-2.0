// Question 01 -  Use logical operator to fid whether the age of a person lies between 10 and 20

let age = 17;
if(age > 10 && age < 20){
  console.log("Yes");
}else{
  console.log("No");
}

// Question 02 - Demostrate the switch case statement in Js
let kitne_Saal = 18;
switch (kitne_Saal) {
  case 12:
    console.log("Teen");
    break;
  case 18:
    console.log("Adult");
    break;  
  case 22:
    console.log("Mard");
    break;
  default:
    console.log("Enter VALID AGE");
    break;
}

// Question 03 - Number is divisible by 2 and 3
let number = 12;
if(number % 2 == 0 && number % 3 == 0){
   console.log("Done Hai Ji");
}else{
  console.log("Nahi ho paaega");
}

// Question 04 - Number is divisible by 2 or 3 
let number2 = 10;
if(number % 2 == 0 || number % 3 == 0){
   console.log("Done Hai Ji");
}else{
  console.log("Nahi ho paaega");
}

// Question 05 - Ternary Operator "You can drive" if age is greater then 18
let age_of_driver = 19;
console.log(age_of_driver > 18 ? "You can drive" : "You cannot drive");