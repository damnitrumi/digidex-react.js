import { ImageComponent } from "../ImageComponent";
import { Name } from "../Name";
import { Level } from "../Level";

import * as Styled from "./styles";
import P from "prop-types";

export const Card = ({ img = "", altText = "", name = "", level = "" }) => {
  return (
    <Styled.Container level={level}>
      <ImageComponent img={img} altText={altText} />
      <Name name={name} />
      <Level level={level} />
    </Styled.Container>
  );
};

Card.propTypes = {
  img: P.string,
  altText: P.string,
  name: P.string,
  level: P.string,
};
