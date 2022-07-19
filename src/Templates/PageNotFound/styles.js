import styled, { css } from "styled-components";
import { Container as Heading } from "../../Components/Name/styles";
import { Container as Paragraph } from "../../Components/Level/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${Heading} {
      font-size: ${theme.font.sizes.xhuge};
    }

    ${Paragraph} {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;
