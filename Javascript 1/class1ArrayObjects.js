//JS exercises from the first js class

import { Cat } from "./Cat.js";
import { Car } from "./Car.js";

//FUNCTIONS EXERCISES
// 1
const printName = (firstName, lastName) => {
  return console.log(`${firstName} ${lastName}`);
};

//printName("Alessia", "Amore");

// 2
const getArea = (sideA, sideB) => {
  return console.log(sideA * sideB);
};

//getArea(3, 5);

// 3
const getDistance = (time, speed) => {
  return console.log(`You have travelled ${time * Math.round(speed)} km.`);
};

//getDistance(10, 8.3988);

// 4
const calculator = {
  owner: "Alessia",
  printFullName: printName,
  getRectangleArea: getArea,
  getTravelledDistance: getDistance,
};

const { printFullName, getRectangleArea, getTravelledDistance } = calculator;

console.log(calculator);
console.log(calculator.owner);
printFullName("John", "Doe");
getRectangleArea(322, 38);
getTravelledDistance(2, 37);

//CLASS EXERCISES
//1
const cat1 = new Cat("Lulu", "black and white", "tabby");
cat1.getCatInfo();

//updating the cat's name
const updateCatName = (newName) => {
  cat1.name = newName;
};
updateCatName("Lily");
cat1.getCatInfo();

//2
const car1 = new Car("ford", "fiesta", "1980");
const car2 = new Car("toyota", "corolla", "2006");

car1.getCarInfo();
car2.getCarInfo();
car1.startCar();
car1.stopCar();

//ARRAY EXERCISES
//1
const nameList = ["Alessia", "Silas", "Gigi", "Okan", "Mukka"];
console.log(nameList[0]);

//given an array and an item in the array, gets the index position of the item
const getIndex = (array, item) => {
  return console.log(array.indexOf(item));
};

getIndex(nameList, "Gigi");
getIndex(nameList, "Sara");

//2
const addArrayItem = (array, newItem) => {
  return array.push(newItem);
};
addArrayItem(nameList, "Maria");
console.log(nameList);

//3
const slicedArray = nameList.slice(0, 3);
console.log(slicedArray);

//4
let newPeopleArray = [];
const newPerson1 = {
  firstName: "Johnny",
  lastName: "SuperCoolLastName",
  email: "JohnnyCool@coolestemail.com",
};
const newPerson2 = {
  firstName: "Jenny",
  lastName: "MegaCoolLastName",
  email: "JennyMegaCool@coolestemail.com",
};

addArrayItem(newPeopleArray, newPerson1);
addArrayItem(newPeopleArray, newPerson2);
console.log(newPeopleArray);
console.log(newPeopleArray[0].email);
