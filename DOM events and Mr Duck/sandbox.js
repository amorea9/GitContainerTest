//--------- DOM MANIPULATION -------------

//BOX changing color when hovered
const box = document.getElementById("box");
//can also work with a flag?
box.addEventListener("click", function () {
  console.log("div is clicked");
  if (box.style.backgroundColor == "red") {
    box.style.backgroundColor = "lightblue";
  } else {
    box.style.backgroundColor = "red";
  }
});

//SHOW SECRET DIV WHEN HOVERING BUTTON ELEMENT
//load page + assign hidden class to the secretDiv
window.addEventListener("load", (e) => {
  secretDiv.classList.add("hidden");
});
//select elements
const secretDiv = document.getElementById("secretDiv");
const hoverButton = document.getElementById("hoverButton");
//when the button element is hovered on, remove the hidden class and show the secretDiv
hoverButton.addEventListener("mouseover", function () {
  secretDiv.classList.remove("hidden");
});
//add again the hidden class when the button is not hovered on
hoverButton.addEventListener("mouseout", function () {
  secretDiv.classList.add("hidden");
});

//SELECT exercise
const displaySelected = () => {
  const selectedValue = selectedFruit.value;
  // Find if the item already exists in the list
  const existingItem = Array.from(fruitList.getElementsByTagName("li")).find((item) => item.textContent === selectedValue);
  // If it exists, remove it, otherwise add it
  if (existingItem) {
    fruitList.removeChild(existingItem);
  } else {
    const newListItem = document.createElement("li");
    newListItem.textContent = selectedValue;
    fruitList.appendChild(newListItem);
  }
};

const selectedFruit = document.getElementById("selectDropDown");
const fruitList = document.getElementById("fruitList");

// Using 'change' event so it triggers when a new option is selected
selectedFruit.addEventListener("change", displaySelected);
