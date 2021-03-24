import { User } from '../src/Solar.js'

describe('User', () => {
  let testUser;

  beforeEach(() => {
    testUser = new User(10, "healthy")
  });

  test("should instantiate a new User with their age", () => {
    expect(testUser.age).toEqual(10)
  });

  test("should return users age in Mercury years", () => {
    expect(testUser.mercuryYears()).toEqual(41)
  });

  test("should return users age in Venus years", () => {
    expect(testUser.venusYears()).toEqual(16)
  });

  test("should return users age in Mars years", () => {
    expect(testUser.marsYears()).toEqual(5)
  });

  test("should return users age in Jupiter years", () => {
    expect(testUser.jupiterYears()).toEqual(0)
  });

  test("should return life expectancy on Earth", () => {
    expect(testUser.lifeExpectancy()).toEqual(85)
  });

  test("should return life expectancy on all 4 planets", () => {
    testUser.lifeExpectancy();
    expect(testUser.lifeExpectancyOnAllFourPlanets()).toEqual([354, 137, 45, 7])
  });

  test("should return life expectancy absolute value, so the value the user has lived over the expectancy based on their age and health", () => {
    let newTestUser = new User(100, "not healthy")
    expect(newTestUser.lifeExpectancy()).toEqual(10)
  });

  test("should throw an error based on wrong health info", () => {
    let newTestUser = new User(100, "other thing")
    expect(newTestUser.lifeExpectancy()).toEqual("error")
  });

  test("should return life expectancy absolute value, so the value the user has lived over the expectancy based on their age and health", () => {
    let newTestUser = new User(100, "healthy")
    expect(newTestUser.lifeExpectancy()).toEqual(5)
  });

  test("should return life expectancy absolute value, so the value the user has lived over the expectancy based on thier age and health for all four planets", () => {
    let newTestUser = new User(100, "healthy")
    newTestUser.lifeExpectancy();
    expect(newTestUser.lifeExpectancyOnAllFourPlanets()).toEqual([20, 8, 2, 0])
  });

  test("should return 67 expected years to live on earth based on very healthy", () => {
    let newTestUser = new User(33, "very healthy")
    expect(newTestUser.lifeExpectancy()).toEqual(67)
  });

  test("this is a UI test to show knowlege of templete literals", () => {
    let newTestUser = new User(33, "very healthy")
    expect(newTestUser.lifeExpectancyUITest()).toEqual("The life expectancy for someone 33 years of age and very healthy is 67 more years on Earth, 279 on Mercury, 108 on Venus, 35 on Mars, 5 on Jupiter")
  });

});



