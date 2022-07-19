import * as Styled from "./styles";

import { Name as Heading } from "../../Components/Name";
import { Level as Paragraph } from "../../Components/Level";

export const PageNotFound = () => {
  return (
    <Styled.Container>
      <Heading name="ERROR 404" />
      <Paragraph level="A página que você busca não foi encontrada!" />
    </Styled.Container>
  );
};
