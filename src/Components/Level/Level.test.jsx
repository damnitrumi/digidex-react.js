import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Level } from ".";

describe("<Level />", () => {
  it("should render with level", () => {
    renderTheme(<Level level="teste" />);
    expect(screen.getByText("teste")).toBeInTheDocument();
  });

  it("should render without level", () => {
    renderTheme(<Level />);
    expect(screen.queryAllByText("teste")).toHaveLength(0);
  });
});
