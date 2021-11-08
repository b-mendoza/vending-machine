import styled from '@emotion/styled';

import { layoutSizeReset, paddingReset } from './resets';

type StyledContainerProps = {
  centerContent?: boolean;
};

export const StyledContainer = styled.main<StyledContainerProps>`
  ${layoutSizeReset}
  ${paddingReset}

  ${({ centerContent }) =>
    centerContent
      ? {
          display: 'grid',
          height: '100vh',
          placeContent: 'center',
          textAlign: 'center',
        }
      : null}
`;

export const StyledMachineWrapper = styled.div`
  display: grid;

  gap: 2rem;

  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
`;

export const StyledControlPanel = styled.section`
  ${layoutSizeReset}
  ${paddingReset}

  background-color: rgba(255, 255, 255, 0.9);

  bottom: 0;

  height: 15vh;

  left: 0;

  position: sticky;
`;
