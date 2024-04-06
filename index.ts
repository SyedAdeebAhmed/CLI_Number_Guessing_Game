#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber=Math.floor(Math.random()*6 + 1);
const answer=await inquirer.prompt([
    {message:"Please guess a number between 1 - 6: " ,name:"guess" , type:"number"},
])

if(answer.guess===randomNumber){
    console.log("You guessed right");
}else{
    console.log("You guessed wrong");
}