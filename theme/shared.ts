import styled from '@emotion/styled';

import { Breakpoints } from 'typings/shared';

export const StyledContainer = styled.section`
  padding: 2rem;

  margin: 0 auto;

  max-width: 120rem;

  @media (min-width: ${Breakpoints.MobileBreakpoint}) {
    padding: 3rem;
  }
`;
