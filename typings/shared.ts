import { Product } from './product';

export type APIResponse = {
  data: Product[];
};

export type CustomPageProps = {
  pageProps: Record<string, unknown>;
};
