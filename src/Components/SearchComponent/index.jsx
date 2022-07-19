import * as Styled from "./styles";
import P from "prop-types";

export const SearchComponent = ({ onChange }) => {
  return (
    <Styled.Container
      onChange={onChange}
      type="search"
      placeholder="Search for a Digimon"
    />
  );
};

SearchComponent.propTypes = {
  onChange: P.func.isRequired,
};
