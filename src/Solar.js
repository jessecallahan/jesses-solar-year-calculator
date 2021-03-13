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








}



