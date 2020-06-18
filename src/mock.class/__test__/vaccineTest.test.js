import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

jest.mock("../recipient", () => {
  // mock class实现
});

beforeEach(() => {
  // clear mock here
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
  });
});
