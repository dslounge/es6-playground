import { add, fibonacci } from "./utils";

describe("add function", () => {
  test("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("adds two other numbers", () => {
    expect(add(3, 4)).toBe(7);
  });
});
