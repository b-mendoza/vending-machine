import 'styles/main.css';

import type { AppProps as NextJSAppProps } from 'next/app';

import { CustomPageProps } from 'typings/shared';

type CustomAppProps<CPP = CustomPageProps> = Omit<
  NextJSAppProps<CPP>,
  keyof CPP
> & { pageProps: CPP };

export default function __NextApp({ Component, pageProps }: CustomAppProps) {
  return <Component {...pageProps} />;
}
