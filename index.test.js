const func = require("./index");

describe("the function", () => {
  test("compiles", () => {
    expect(func([5])).toBe(0);
  });
});
