import * as Styled from "./styles";
import P from "prop-types";

export const ImageComponent = ({ img = "", altText = "" }) => {
  return <Styled.Container src={img} alt={altText} />;
};

ImageComponent.propTypes = {
  img: P.string,
  altText: P.string,
};
