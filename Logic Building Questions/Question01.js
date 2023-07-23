// Write a JavaScript program to generate a random number and store it in a variable.The program then takes an input fromm the user to tel them weather the gess number is correct greater or lesser than the original number.
// 100 - (number of guess) is the score of the user the program is expected to terminate once the number is guess Should betwee 1 - 100;

let random_Number = Math.random() * 100;
let a = Number.parseInt(random_Number);
let input;
let score = 100;
while(input != a){
    input = prompt("Enter a number: ");
    if(input == a){
        console.log("Congratulations you will win");
        console.log(`Your Score is ${score}`);
    }
    else if(input > a){
        console.log("Input is greater than actual nmber")
        score--;
    }
     else if(input < a){
        console.log("Input is lesser than actual nmber")
       score--;

    }
}