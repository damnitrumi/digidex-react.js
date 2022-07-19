import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Name } from ".";

describe("<Name />", () => {
  it("should render with name", () => {
    renderTheme(<Name name="teste" />);
    expect(screen.getByRole("heading", { name: "teste" })).toBeInTheDocument();
  });

  it("should render without name", () => {
    renderTheme(<Name />);
    expect(screen.getByRole("heading", { name: "" })).toBeInTheDocument();
  });
});
