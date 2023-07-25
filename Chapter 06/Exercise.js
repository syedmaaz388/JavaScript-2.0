// Question 01 - Write aa program using promp function to take input of age as a value from the user and use alert to tell him if he can drive

let age = prompt("Enter yorr age");
age = Number.parseInt(age);

const canDrive = (age) =>{
   return age >= 18 ? true : false
}

if(canDrive(age)){
  alert("Yes you can drive")
}else{
  alert("You cannot drive")
}

// Question 02 - In Question use confirm to ask the user of the wants to see the prompt again
// let runagain = true;
// const canDrive02 = (age02) =>{
//   return age02 >= 18 ? true : false
// // }
// while(runagain){
// let age02 = prompt("Enter your age");
// age02 = Number.parseInt(age02);
// if(canDrive02(age02)){
//   alert("Yes you can drive")
// }else{
//   alert("You cannot drive")
// }
//  runagain = confirm("Do you want to play again")
// }

// Question 03 - Use error if age enter by user is not true
let runagain = true;
const canDrive02 = (age02) =>{
  return age02 >= 18 ? true : false
}
while(runagain){
let age02 = prompt("Enter your age");
age02 = Number.parseInt(age02);
if(age02 < 0){
  console.error("Please enter a valid age");
  break;
}
if(canDrive02(age02)){
  ("Yes you can drive")
}else{
  alert("You cannot drive")
}
 runagain = confirm("Do you want to play again")
}

// Question 04 - write a program to change the url to facebook.com (redirection) if user enters a number greater than 4
let num = prompt("Enter yout number: ");
num = Number.parseInt(num);

if(num > 4){
  location.href = "https://www.facebook.com";
}

// Question 05 - Change the color of background based on user Value
let color = prompt("Enter the page background color");
document.body.style.background = color; 