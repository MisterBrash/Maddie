'use strict';

/**
 * ICS3UC Final Project S1 2023-24
 * 
 * Author: Maddy D
 * Description: Math quiz
 * 
 */

let score = 0;

let number1 = Math.floor(Math.random() * 100);
let number2 = Math.floor(Math.random() * (100 - number1));

document.getElementById("question").innerHTML = number1 + "+" + number2;

let answer = number1 + number2;

document.getElementById("enter_answer").addEventListener("click", correct)

function correct() {
  let player_answer = parseInt(document.getElementById("player_answer").value);
  if (player_answer === answer) {
    alert("Good job! that's right!");
    score++;
    console.log(score);
  }
  else 
    alert("Sorry. That's wrong");
}
