// filename: complexCode.js
// This code is a complex simulation of a virtual pet game.

class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.age = 0;
    this.hunger = 0;
    this.happiness = 100;
    this.energy = 100;
    this.isAsleep = false;
    this.isAlive = true;
  }

  feed() {
    if (!this.isAlive) {
      console.log(`${this.name} is no longer alive.`);
      return;
    }

    if (this.hunger <= 0) {
      console.log(`${this.name} is not hungry.`);
      return;
    }

    this.hunger -= 10;
    this.happiness += 5;
    this.energy += 2;

    console.log(`${this.name} has been fed.`);
  }

  play() {
    if (!this.isAlive) {
      console.log(`${this.name} is no longer alive.`);
      return;
    }

    if (this.energy <= 10) {
      console.log(`${this.name} is too tired to play.`);
      return;
    }

    this.energy -= 10;
    this.happiness += 10;

    console.log(`${this.name} is happily playing.`);
  }

  sleep() {
    if (!this.isAlive) {
      console.log(`${this.name} is no longer alive.`);
      return;
    }

    this.isAsleep = true;
    console.log(`${this.name} is now sleeping.`);

    setTimeout(() => {
      this.isAsleep = false;
      this.energy = 100;
      console.log(`${this.name} woke up and feels energized.`);
    }, 5000);
  }

  ageUp() {
    if (!this.isAlive) {
      console.log(`${this.name} is no longer alive.`);
      return;
    }

    this.age += 1;
    this.hunger += 5;
    this.happiness -= 5;

    if (this.age >= 10) {
      console.log(`${this.name} has passed away.`);
      this.isAlive = false;
    } else {
      console.log(`${this.name} is now ${this.age} years old.`);
    }
  }
}

// Test the functionality of the Pet class
const pet1 = new Pet("Buddy", "Dog");

console.log(`Name: ${pet1.name}`);
console.log(`Type: ${pet1.type}`);
console.log(`Age: ${pet1.age}`);

pet1.feed();
pet1.play();
pet1.sleep();
pet1.ageUp();

console.log(`Name: ${pet1.name}`);
console.log(`Type: ${pet1.type}`);
console.log(`Age: ${pet1.age}`);

pet1.feed();
pet1.play();
pet1.sleep();
pet1.ageUp();

console.log(`Name: ${pet1.name}`);
console.log(`Type: ${pet1.type}`);
console.log(`Age: ${pet1.age}`);

pet1.feed();
pet1.play();
pet1.sleep();
pet1.ageUp();

console.log(`Name: ${pet1.name}`);
console.log(`Type: ${pet1.type}`);
console.log(`Age: ${pet1.age}`);

pet1.feed();
pet1.play();
pet1.sleep();
pet1.ageUp();