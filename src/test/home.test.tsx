import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { BrowserRouter as Router } from "react-router-dom";

// Elements rendered Check
describe("Home Test Suite", () => {
  it("Should have the link to route to Problem4", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    expect(screen.getByText(/Go to Problem 4/i)).toBeTruthy();
  });
});
