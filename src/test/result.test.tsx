import { render, screen } from "@testing-library/react";
import Result from "../pages/Result";

describe("Result tests", () => {
  it("should contains the input elements and button", () => {
    render(<Result />);
    const personInput = screen.getByTestId(/person-name/i);
    const relativeInput = screen.getByTestId(/relative-name/i);
    const button = screen.getByText(/Find Result/i);

    expect(personInput).toBeTruthy();
    expect(relativeInput).toBeTruthy();
    expect(button).toBeTruthy();
  });
});
