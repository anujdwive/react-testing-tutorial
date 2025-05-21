import { render, screen } from "@testing-library/react";
import { sum } from "../sum";

// This test mathod take three argument (name, function, time)
test("Test the Sum of Number", () => {
  let a = 10;
  let b = 20;
  let total = 30;
  expect(sum(a, b)).toBe(total);
});
