import styled from '@emotion/styled';

import { Breakpoints } from 'typings/shared';

export const StyledContainer = styled.main`
  padding: 2rem;

  margin: 0 auto;

  max-width: 120rem;

  @media (min-width: ${Breakpoints.MobileBreakpoint}) {
    padding: 3rem;
  }
`;

export const StyledMachineWrapper = styled.div`
  display: grid;

  gap: 2rem;

  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
`;
