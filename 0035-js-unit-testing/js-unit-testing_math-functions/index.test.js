import { add, subtract, multiply, divide } from ".";

test("testing add function. should add two arguments", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

test("subtract two numbers", () => {
  const result = subtract(2, 1);
  expect(result).toBe(1);
});

test("multiply two numbers", () => {
  const result = multiply(2, 3);
  expect(result).toBe(6);
});

test("divide two numbers", () => {
  const result = divide(8, 4);
  expect(result).toBe(2);
});
