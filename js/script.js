//the unordered list where the player's guessed letters will appear//
const guessedLetters = document.querySelector(".guessed-letters");
//the button with the text "Guess!" in it//
const guessLetterButton = document.querySelector(".guess");
//the text input box where the player will guess a letter//
const textInput = document.querySelector(".letter");
//the empty paragraph where the word in progress will appear//
const wordInProgress = document.querySelector(".word-in-progress");
//The papragraph where the remaining guesses will display//
const remainingGuesses = document.querySelector (".remaining");
//The span inside the paragraph hwere the remaining guesses will display//
const numRemainingGuesses = document.querySelector (".remaining span");
//The empty paragraph where messages will appear when the player guesses a letter//
const message = document.querySelector (".message");
//The button where the message will appear prompting the player to play again//
const playAgainButton = document.querySelector (".play-again hide");

//Starter word to test out the game//
const word = "magnolia";

const placeholder = function(word) {
    const placeholderLetters = []; 
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    
wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = textInput.value;
    console.log(guess);
    textInput.value = "";
});