import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const test1 = screen.getByText(/This Is Not Case Sanstive/i); //if you write the text like this then it is not give you typo error
  const text2 = screen.getByText("Learn Jest testing");
  const title = screen.getByTitle(/Image of the tree/i);
  expect(test1).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("learn inputbox test cases", () => {
  render(<App />);
  const inputTest = screen.getByRole("textbox");
  const placeholder = screen.getByPlaceholderText("Enter Your Name");
  expect(inputTest).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
  expect(inputTest).toHaveAttribute("name", "Anuj Dwivedi");
  expect(inputTest).toHaveAttribute("id", "userId");
  //You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`
  // expect(inputTest).toHaveAttribute("value", "name");
});

describe("Ui test cases", () => {
  test("inputbox name attribute test", () => {
    render(<App />);
    const nameAttribute = screen.getByRole("textbox");
    expect(nameAttribute).toHaveAttribute("name", "Anuj Dwivedi");
  });
  test("inputbox id attribute test", () => {
    render(<App />);
    const idAttribute = screen.getByRole("textbox");
    expect(idAttribute).toHaveAttribute("name", "Anuj Dwivedi");
  });
});
