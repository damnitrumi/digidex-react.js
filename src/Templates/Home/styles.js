import styled, { css } from "styled-components";
import { Container as Heading } from "../../Components/Name/styles";
import { Container as Logo } from "../../Components/ImageComponent/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    > ${Heading} {
      max-width: 300px;
      margin: ${theme.spacings.tiny} auto;
      color: white;
    }
    > ${Heading}:last-of-type {
      max-width: 600px;
    }

    > ${Logo} {
      margin: 0 auto;
    }
    padding: ${theme.spacings.tiny};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: ${theme.spacings.small};
  `}
`;
