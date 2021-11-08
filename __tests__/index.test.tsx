import { createSerializer } from '@emotion/jest';
import { render, screen } from '@testing-library/react';

import Home from 'pages';

import { SWRTestWrapper } from '__utils__';

expect.addSnapshotSerializer(createSerializer());

describe('Tests to Home page component', () => {
  it('Should render SkeletonProduct component on first render', () => {
    render(
      <SWRTestWrapper>
        <Home />
      </SWRTestWrapper>,
    );

    expect(screen.getAllByTestId(/skeletonproduct/i).length).toBeTruthy();
  });
});
