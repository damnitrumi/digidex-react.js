import { renderTheme } from "../../Styles/render-theme";
import { ImageComponent } from ".";
import { screen } from "@testing-library/react";

describe("<ImageComponent/>", () => {
  it("should render with image", () => {
    renderTheme(<ImageComponent img="a.svg" />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "a.svg");
  });

  it("should render without image", () => {
    renderTheme(<ImageComponent />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "");
  });

  it("should render with altText", () => {
    renderTheme(<ImageComponent altText="image" />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "image");
  });

  it("should render without altText", () => {
    renderTheme(<ImageComponent />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "");
  });
});
