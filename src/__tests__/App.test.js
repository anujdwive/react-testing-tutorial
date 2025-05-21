import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

// beforeAll, beforeEach, afterAll, afterEach
// beforeAll(() => {
//   console.log("Run before the test cases run");
// });
// beforeEach(() => {
//   console.log("Run before every the test cases run");
// });

// Snapshots >>> it is create an copy in form of .snap it means when you change any thing into the file which you render(APP) snap give you an error and ask you keep the changes or discard
test("Snapshot for the App Component", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

// Test cases for TEXT

test("renders learn react link", () => {
  render(<App />);
  const test1 = screen.getByText(/This Is Not Case Sanstive/i); //if you write the text like this then it is not give you typo error
  const text2 = screen.getByText("Learn Jest Testing");
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

// GROUP OF TEST CASE
// If use (.only or .skip) after the describe it test the all test case accoding this

describe("Ui Event Test Cases", () => {
  test("inputbox onChange Event test", () => {
    render(<App />);
    const onChangeEvent = screen.getByRole("textbox");
    /* Test On onChange event */
    fireEvent.change(onChangeEvent, { target: { value: "a" } });
    expect(onChangeEvent.value).toBe("a");
  });
  test("Button onClick Event test", () => {
    render(<App />);
    const onClickEnvent = screen.getByRole("button");
    fireEvent.click(onClickEnvent);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});

describe("API test cases", () => {
  test("inputbox name attribute test", () => {
    render(<App />);
    const nameAttribute = screen.getByRole("textbox");
    expect(nameAttribute).toHaveAttribute("name", "Anuj Dwivedi");
  });
  test("inputbox id attribute test", () => {
    render(<App />);
    const idAttribute = screen.getByRole("textbox");
    expect(idAttribute).toHaveAttribute("id", "userId");
  });

  describe.skip("Nested Group", () => {
    test("check image", () => {
      render(<App />);
      const text = screen.getByAltText("No Image");
      expect(text).toBeInTheDocument();
    });
  });
});

// afterAll(() => {
//   console.log("Run after the test cases run");
// });
// afterEach(() => {
//   console.log("Run after every the test cases run");
// });
