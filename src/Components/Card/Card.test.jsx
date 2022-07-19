import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Card } from ".";

describe("<Card />", () => {
  it("should render card", () => {
    renderTheme(<Card />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
