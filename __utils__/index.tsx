import { render, RenderOptions } from '@testing-library/react';
import type { SWRConfiguration } from 'swr';
import { SWRConfig } from 'swr';

import { fetcher } from 'utils/shared';

type SWRTestWrapperProps<Result = Promise<unknown>> = {
  children?: React.ReactNode;
  swrConfig?: SWRConfiguration<Result, Error>;
};

export function SWRTestWrapper({ children, swrConfig }: SWRTestWrapperProps) {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 0,
        fetcher,
        provider: () => new Map(),
        ...swrConfig,
      }}
    >
      {children}
    </SWRConfig>
  );
}

export const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: SWRTestWrapper, ...options });
