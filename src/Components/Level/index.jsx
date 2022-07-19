import * as Styled from "./styles";
import P from "prop-types";

export const Level = ({ level = "" }) => {
  return <Styled.Container>{level}</Styled.Container>;
};

Level.propTypes = {
  level: P.string,
};
