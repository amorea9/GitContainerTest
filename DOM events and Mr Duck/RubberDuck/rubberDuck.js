//Selecting all relevant elements by id
const logo = document.getElementById("logo");
const duckMessage = document.getElementById("duckMessage");
const messagesList = document.getElementById("messagesList");
const textInput = document.getElementById("textInput");
const button = document.getElementById("button");
const toggleHistoryButton = document.getElementById("toggleHistoryButton");
const duckHistoryContainer = document.getElementById("duckHistoryContainer");
const clearHistoryButton = document.getElementById("clearHistoryButton");
const duckHistoryHeader = document.getElementById("duckHistoryHeader");

//creating messages array where inputs will be stored
let messageArray = JSON.parse(localStorage.getItem("savedMessages")) || [];

//function to display the duck message
const displayHidden = () => {
  duckMessage.classList.remove("hidden");
  duckMessage.classList.add("visible");
};

//function to hide the duck message
const hideDisplayed = () => {
  duckMessage.classList.remove("visible");
  duckMessage.classList.add("hidden");
};
//function to toggle history on and off
const toggleHistory = () => {
  duckHistoryContainer.classList.toggle("visible");
  //if there are no saved messages, show a message
  if (!savedMessages) {
    duckHistoryHeader.textContent = "Mr Duck has no history for you. Refresh to see something!";
  }
};

//clear history
const clearHistory = () => {
  localStorage.clear();
  messageArray = [];
  console.log("local storage cleared", messageArray);
};

//adding event listeners to display or hide the message on mouse over and out
logo.addEventListener("mouseover", displayHidden);
logo.addEventListener("mouseout", hideDisplayed);
toggleHistoryButton.addEventListener("click", toggleHistory);
clearHistoryButton.addEventListener("click", clearHistory);

//function to add the messages to the array
const addMessage = () => {
  //get value from text input
  const inputValue = textInput.value;
  //push new values to the array
  messageArray.push(inputValue);
  saveToStorage(messageArray);
};

const saveToStorage = (messageArray) => {
  //save stringify array into local storage giving them the name of "savedMessages"
  localStorage.setItem("savedMessages", JSON.stringify(messageArray));
  console.log("savedMessages on click", localStorage.savedMessages);
};
//adding eventlistener to the button - add the message to the array on click
button.addEventListener("click", addMessage);
console.log("currently saved", localStorage.savedMessages);
const savedMessages = JSON.parse(localStorage.getItem("savedMessages"));
// const parsedArray = JSON.parse(localStorage.getItem("savedMessages"));
//function that created list elements for each item of the saved messages array
const displaySavedMessages = () => {
  console.log("m", messageArray);
  if (!savedMessages) {
    console.log("There are currently no saved messages");
  } else {
    savedMessages.forEach((item) => {
      const newItem = document.createElement("li");
      newItem.textContent = item;
      messagesList.appendChild(newItem);
    });
  }
};

//on load, display the previously saved messages
window.addEventListener("load", displaySavedMessages);
