// Get the container element
const numberList = document.getElementById("numberList");

// Loop through numbers from 1 to 20
// Create a new div element for each number
// Check if the number is even or odd and apply the appropriate class
// Add an event listener to highlight the number when clicked
// Remove highlight from all numbers
// Add highlight to the clicked number
// Append the new div to the container

for (let i = 1; i <= 20; i++) {
  const numberItem = document.createElement("div");
  numberItem.classList.add("number");
  numberItem.textContent = i;
  if (i % 2) {
    numberItem.classList.add("odd");
  } else {
    numberItem.classList.add("even");
  }
  numberItem.addEventListener("click", () => {
    if (numberItem.classList.contains("highlight")) {
      numberItem.classList.remove("highlight");
    } else {
      const allNumbers = document.querySelectorAll(".number");
      allNumbers.forEach((item) => {
        item.classList.remove("highlight");
      });
      numberItem.classList.add("highlight");
    }
  });
  numberList.appendChild(numberItem);
}
