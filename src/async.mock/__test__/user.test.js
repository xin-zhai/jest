import { register } from "../user";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const mockUsername = " mocked username";
    const mockPassword = "mocked password";
    await expect(register(mockUsername, mockPassword)).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    register();
    await expect(register()).rejects.toEqual(
      new Error("wrong username or password")
    );
  });
});
