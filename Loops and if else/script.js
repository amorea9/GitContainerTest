import { Book } from "./Book.js";

//EXERCISE 1
const mixedArray = ["Peter", 7, "Marianne", true, "Helle", 8];

for (let i = 0; i < mixedArray.length; i++) {
  console.log(`${mixedArray[i]} is a ${typeof i}`);
}

//EXERCISE 2
const bookList = document.getElementById("bookList");
//creating object from the predefined class
// const bookCollection = [new Book("To Kill a Mockingbird", "Harper Lee"), new Book("1984", "George Orwell"), new Book("Pride and Prejudice", "Jane Austen")];

const bookCollection = [
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby-Dick", author: "Herman Melville" },
];

const addBook = (book) => {
  const bookItem = document.createElement("li");
  bookItem.textContent = `"${book.title}" from ${book.author}`;
  bookList.appendChild(bookItem);
};
bookCollection.forEach(addBook);

// let bookTitle;
// let bookAuthor;
// const bookObject = new Book(bookTitle, bookAuthor);
// const bookCollection = [new Book(bookTitle, bookAuthor)];
// const addToBookCollection = () => {};

//EXERCISE 3
const a = 0;
const b = 2;
const c = 5;
const d = 30;

const findLargest = (a, b, c, d) => {
  let largestNumber;
  if (a > b) {
    largestNumber = a;
    if (a > c) {
      largestNumber = a;
      if (a > d) {
        largestNumber = a;
      }
    }
  } else {
    largestNumber = b;
    if (b > c) {
      largestNumber = b;
      if (b > d) {
        largestNumber = b;
      }
    } else {
      largestNumber = c;
      if (c > d) {
        largestNumber = c;
      } else {
        return d;
      }
    }
  }
  console.log(largestNumber);
};

findLargest(a, b, c, d);

//EXERCISE 4
const findRange = (number, start, end) => {
  if (start <= number && number <= end) {
    console.log(true);
  } else {
    console.log(false);
  }
};

findRange(17, 0, 30);

//EXERCISE 5
//function to generate a random number
const setRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};
//generate a number on load
window.addEventListener("load", setRandomNumber);
//store randomNumber in a const
const randomNumber = setRandomNumber();
console.log("randomNumber", randomNumber);

const guessButton = document.getElementById("guessButton");
const userInput = document.getElementById("userInput");
const feedbackMessage = document.getElementById("feedbackMessage");
const checkStatsButton = document.getElementById("checkStatsButton");
const statsContainer = document.getElementById("statsContainer");
let userGuesses = [];
let guessStatus;

const guessNumber = () => {
  const userGuess = userInput.value;
  feedbackMessage.classList.remove("red", "green");
  if (parseInt(userGuess) >= 100 || parseInt(userGuess) < 1) {
    feedbackMessage.textContent = "Please pick a number between 1 and 100! Your guesses have been reset.";
    userGuesses = [];
  } else if (parseInt(userGuess) < randomNumber) {
    userGuesses.push(userGuess);
    feedbackMessage.classList.add("red");
    feedbackMessage.textContent = "Go higher!";
    guessStatus = false;
  } else if (parseInt(userGuess) > randomNumber) {
    userGuesses.push(userGuess);
    feedbackMessage.classList.add("red");
    feedbackMessage.textContent = "Go lower!";
    guessStatus = false;
  } else {
    userGuesses.push(userGuess);
    feedbackMessage.classList.add("green");
    guessStatus = true;
    //disable input field when number is guessed
    userInput.disabled = guessStatus;
    if (userGuesses.length > 1) {
      feedbackMessage.textContent = `Correct! You have guessed!!! It took you ${userGuesses.length} tries to guess. Check out your stats for more info.`;
    } else {
      feedbackMessage.textContent = `Correct! You have guessed!!! It took you ${userGuesses.length} try to guess!!`;
    }
  }
  if (!statsContainer.classList.contains("hidden")) {
    //updating stats, once the display stats has been clicked at least once
    displayStats();
  }
  return { userGuesses, guessStatus };
};

const displayStats = () => {
  statsContainer.classList.remove("hidden");
  if (userGuesses.length > 1) {
    let guessList = userGuesses.map((guess) => `<li>${guess}</li>`).join("");
    // statsContainer.textContent = `You have made ${userGuesses.length} guesses so far! Your guesses have been:  ${userGuesses.join(", ")}`;
    statsContainer.innerHTML = `You have made ${userGuesses.length} guesses so far! Your guesses have been:  <ul>${guessList}</ul>`;
  } else {
    statsContainer.textContent = "Guess some more to see some stats!";
  }
  if (guessStatus === true && userGuesses.length === 1) {
    statsContainer.textContent = `You are too good at this game! I got no stats for you.`;
  }
};

checkStatsButton.addEventListener("click", displayStats);
guessButton.addEventListener("click", guessNumber);

//FUTURE IMPROVEMENTs
//give a message if you guess the same number
