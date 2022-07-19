import { renderTheme } from "../../styles/render-theme";
import { SearchComponent } from ".";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

describe("<SearchComponent />", () => {
  it("should render searchComponent", () => {
    const fn = jest.fn();
    renderTheme(<SearchComponent onChange={fn} />);
    expect(
      screen.getByPlaceholderText("Search for a Digimon")
    ).toBeInTheDocument();
  });

  it("should have a value when typed", () => {
    const fn = jest.fn();
    renderTheme(<SearchComponent onChange={fn} />);
    const input = screen.getByPlaceholderText("Search for a Digimon");

    userEvent.type(input, "Teste");

    expect(input.value).toBe("Teste");
  });

  it("should call function when typed", () => {
    const fn = jest.fn();
    renderTheme(<SearchComponent onChange={fn} />);

    const input = screen.getByPlaceholderText("Search for a Digimon");
    const value = "Teste";
    userEvent.type(input, value);

    expect(fn).toHaveBeenCalledTimes(value.length);
  });
});
