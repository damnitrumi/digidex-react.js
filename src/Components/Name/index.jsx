import * as Styled from "./styles";
import P from "prop-types";

export const Name = ({ name = "" }) => {
  return <Styled.Container>{name}</Styled.Container>;
};

Name.propTypes = {
  name: P.string,
};
