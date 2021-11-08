import { css } from '@emotion/react';

import { Breakpoints } from 'typings/shared';

export const layoutSizeReset = css`
  margin: 0 auto;

  max-width: 140rem;
`;

export const paddingReset = css`
  padding: 2rem;

  @media (min-width: ${Breakpoints.MobileBreakpoint}) {
    padding: 3rem;
  }
`;
