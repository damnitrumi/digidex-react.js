import styled, { css } from "styled-components";
import { bgSelector } from "../../utils/bgSelector";

export const Container = styled.div`
  ${({ theme, level }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.small};
    ${bgSelector[level]};
    color: white;
    border-radius: 5px;

    &:hover {
      transform: scale(1.1);
    }
  `}
`;
