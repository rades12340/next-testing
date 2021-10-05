import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

it("render Hello component", () => {
  render(<Hello />);
  const myElement = screen.getByText(/Hello world/);
  expect(myElement).toBeInTheDocument();
});
