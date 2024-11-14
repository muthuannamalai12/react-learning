import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Contact Us Component test cases", () => {
  // it is an alias of test we can either use it or test both will work fine use anyone do not mix and match
  it("Should render the contact component", () => {
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should check if button is rendered", () => {
    render(<Contact />);

    // Querying
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should check if button is rendered - another way", () => {
    render(<Contact />);

    // Querying
    const input = screen.getByText("Submit");

    // Assertion
    expect(input).toBeInTheDocument();
  });

  it("Should check if one input boxes is rendered in the contact us page", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputBoxes).toBeInTheDocument();
  });

  it("Should check if all the input boxes is rendered in the contact us page", () => {
    render(<Contact />);

    // Querying
    // input boxes would be an array of React Create Element since jsx is React Create Element at the end of the day
    // And react create element are JS objects at the end of the day
    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(3);
  });
});
