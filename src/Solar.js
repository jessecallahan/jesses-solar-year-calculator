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
    return this.lifeExpectancyOnEarth = expectancy;
  }

  lifeExpectancyOnAllFourPlanets() {
    let x = this.lifeExpectancyOnEarth
    let MercLifeExp = Math.floor(x * 100 / 24)
    let VenusLifeExp = Math.floor(x * 100 / 62)
    let MarsLifeExp = Math.floor(x * 1 / 1.88)
    let JupiterLifeExp = Math.floor(x * 1 / 11.86)
    return [MercLifeExp, VenusLifeExp, MarsLifeExp, JupiterLifeExp]
  }








}



