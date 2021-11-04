import 'styles/main.css';

import type { AppProps as NextJSAppProps } from 'next/app';
import { SWRConfig } from 'swr';

import { CustomPageProps } from 'typings/shared';

import { fetcher } from 'utils/shared';

type CustomAppProps<CPP = CustomPageProps> = Omit<
  NextJSAppProps<CPP>,
  keyof CPP
> & { pageProps: CPP };

export default function __NextApp({ Component, pageProps }: CustomAppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
