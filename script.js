'use strict';

/**
 * ICS3UC Final Project S1 2023-24
 * 
 * Author: Maddy D
 * Description: Hangman
 * 
 */


//The play button on the first page - takes the user to the second page


// the arrays, alphabet, word
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const words = ["lunch", "cloud", "pinky", "stare", "start", "album", "boxer", "daisy", "earth", "fairy", "score"];

//Picking a random word from an array
let secret_word = words[Math.floor(Math.random() * words.length)];

//store the guessed letters in an arry 
let guessed_letters = new Array(secret_word.length).fill("_");

// keeping track of the wrong guesses 
let wrong_guesses = 0;

// update the word display
function updateworddisplay(){
  document.getElementById("word_display").innerText = guessed_letters.join(" ");
}

// display the word
updateworddisplay();

//the letters that have been guessed - sees if they are right or wrong - 
function letter_guess() {
  const Lguess = document.getElementById("letter_guess")
  const guess = Lguess.value.toLowerCase();
  
  //checking if the letter is in the secret word
  if (secret_word.includes(guess)) {
    //Put the guessed letters in the 'right_letters' array 
    for (let u = 0; u < secret_word.length; u++) {
      if (secret_word[u] === guess) {
        guessed_letters[u] = guess
      }
    }

    //Has the word been guessed?
    if (!guessed_letters.includes("_")) {
      document.getElementById("message").innerText = "Congratulations! You guessed the word";
    }
  } else {
      //wrong guess
      wrong_guesses++;
      //show the number of wrong guesses 
      document.getElementById("message").innerText = "wrong guesses: " + wrong_guesses;
    }

    //clearing the input
Lguess.value = "";

    //update the word display 
    updateworddisplay();

    //Has the max number of wrong guesses been reached 
    if (wrong_guesses === 6) {
      document.getElementById("message").innerText = "You have NO MORE guesses left. The word was: " + secret_word;
    }   
}

  

