import { User } from '../src/Solar.js'

describe('User', () => {
  let testUser;

  beforeEach(() => {
    testUser = new User(10, "healthy")
  })

  test("should instantiate a new User with their age", () => {
    expect(testUser.age).toEqual(10)
  })



});


