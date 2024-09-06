export class Cat {
  constructor(name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
  }
  getCatInfo() {
    console.log(`The cat name is ${this.name}. It is of a ${this.color} color and it is a ${this.breed}`);
  }
}
