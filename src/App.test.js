import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders home page", () => {
    render(<App />);
    expect(screen).toMatchSnapshot();
  });
});
