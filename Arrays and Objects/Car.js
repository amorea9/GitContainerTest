export class Car {
  constructor(make, model, year, isRunning) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = isRunning;
  }
  getCarInfo() {
    console.log(`The car is a ${this.make}. The model is "${this.model}" and it's from the year ${this.year}.`);
  }
  startCar() {
    this.isRunning = true;
    return console.log(`The boolean is ${this.isRunning}. This means that the ${this.make} ${this.model} is on and running.`);
  }
  stopCar() {
    this.isRunning = false;
    return console.log(`The boolean is ${this.isRunning}. This means that the ${this.make} ${this.model} is off and not running.`);
  }
}
