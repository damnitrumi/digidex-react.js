import styled, { css } from "styled-components";

export const Container = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;
