import styled, { css } from "styled-components";

export const Container = styled.input`
  ${({ theme }) => css`
    display: block;
    margin: ${theme.spacings.tiny} auto;
    padding: ${theme.spacings.tiny};
  `}
`;
