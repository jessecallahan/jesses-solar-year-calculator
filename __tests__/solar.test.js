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
    expect(testUser.lifeExpectancyOnAllFourPlanets()).toEqual([20, 8, 2, 0])
  });




});



