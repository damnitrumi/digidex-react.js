import { css } from "styled-components";

export const bgSelector = {
  Fresh: () => css`
    background: #e253eb;
  `,
  "In Training": () => css`
    background: #9f9f9f;
  `,
  Training: () => css`
    background: grey;
  `,
  Rookie: () => css`
    background: #097111;
  `,
  Champion: () => css`
    background: #163ab3;
  `,
  Ultimate: () => css`
    background: #6e16b3;
  `,
  Mega: () => css`
    background: #c4a806;
  `,

  Armor: () => css`
    background: #260bed;
  `,
};
