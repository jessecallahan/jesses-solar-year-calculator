export class User {
  constructor(age, health, lifeExpectancyOnEarth) {
    this.age = age;
    this.health = health;
    this.lifeExpectancyOnEarth = lifeExpectancyOnEarth;
  }

  mercuryYears() {
    let age = this.age * 100 / 24;
    return Math.floor(age);
  }

  venusYears() {
    let age = this.age * 100 / 62;
    return Math.floor(age);
  }

  marsYears() {
    let age = this.age * 1 / 1.88;
    return Math.floor(age);
  }

  jupiterYears() {
    let age = this.age * 1 / 11.86;
    return Math.floor(age);
  }

  lifeExpectancy() {
    let expectancy;
    if (this.health === "very healthy") {
      expectancy = Math.abs(this.age - 100);
    } else if (this.health === "healthy") {
      expectancy = Math.abs(this.age - 95);
    } else if (this.health === "not healthy") {
      expectancy = Math.abs(this.age - 90);
    } else {
      "error"
    }
    this.lifeExpectancyOnEarth = expectancy;
    return `The life expectancy of someone who is ${this.health} and is ${this.age} years old on Earth is ${this.lifeExpectancyOnEarth}`
  }








}



