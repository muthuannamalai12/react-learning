import { sum } from "../sum";

test("Sum function should return the sum of 2 variables", () => {
  const result = sum(2, 3);

  // assertion
  expect(result).toBe(5);
});
