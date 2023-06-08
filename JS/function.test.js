const { sum, subtract } = require("./function");

test("Sum 2 + 5 is equal 7", () => {
  expect(sum(2, 5)).toBe(7);
});
