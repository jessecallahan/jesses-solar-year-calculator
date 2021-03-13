export class User {
  constructor(age, health, lifeExpectancyOnEarth, lifeExpectancyList) {
    this.age = age;
    this.health = health;
    this.lifeExpectancyOnEarth = lifeExpectancyOnEarth;
    this.lifeExpectancyList = lifeExpectancyList;
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
      expectancy = this.age - 100;
    } else if (this.health === "healthy") {
      expectancy = this.age - 95;
    } else if (this.health === "not healthy") {
      expectancy = this.age - 90;
    } else {
      "error"
    }
    return this.lifeExpectancyOnEarth = Math.abs(expectancy);
  }

  lifeExpectancyOnAllFourPlanets() {
    let x = this.lifeExpectancyOnEarth
    let MercLifeExp = Math.floor(x * 100 / 24)
    let VenusLifeExp = Math.floor(x * 100 / 62)
    let MarsLifeExp = Math.floor(x * 1 / 1.88)
    let JupiterLifeExp = Math.floor(x * 1 / 11.86)
    this.lifeExpectancyList = [MercLifeExp, VenusLifeExp, MarsLifeExp, JupiterLifeExp]
    return [MercLifeExp, VenusLifeExp, MarsLifeExp, JupiterLifeExp]
  }

  lifeExpectancyUI() {
    this.lifeExpectancy();
    this.lifeExpectancyOnAllFourPlanets();
    return `The life expectancy for someone ${this.age} years of age and ${this.health} is ${this.lifeExpectancyOnEarth} on earth, ${this.lifeExpectancyList[0]} on Mercury, ${this.lifeExpectancyList[1]} on Venus, ${this.lifeExpectancyList[2]} on Mars, ${this.lifeExpectancyList[3]} on Jupiter`

  }








}



