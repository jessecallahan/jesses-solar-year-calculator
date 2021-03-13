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

  test("should return life expecatancy on Earth", () => {
    expect(testUser.lifeExpectancy()).toEqual("The life expectancy of someone who is healthy and is 10 years old on Earth is 85")
  });




});



