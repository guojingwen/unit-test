const math = require("./math");
const { add, minus } = math;

test("3+7", () => {
  expect(add(3, 7)).toBe(10);
});
test("7-3", () => {
  expect(minus(7, 3)).toBe(4);
});
