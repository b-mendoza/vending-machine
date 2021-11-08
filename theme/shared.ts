import styled from '@emotion/styled';

import { Breakpoints } from 'typings/shared';

type StyledContainerProps = {
  centerContent?: boolean;
};

export const StyledContainer = styled.main<StyledContainerProps>`
  padding: 2rem;

  margin: 0 auto;

  max-width: 140rem;

  ${({ centerContent }) =>
    centerContent
      ? {
          display: 'grid',
          height: '100vh',
          placeContent: 'center',
        }
      : null}

  @media (min-width: ${Breakpoints.MobileBreakpoint}) {
    padding: 3rem;
  }
`;

export const StyledMachineWrapper = styled.div`
  display: grid;

  gap: 2rem;

  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
`;

export const StyledControlPanel = styled.section``;
