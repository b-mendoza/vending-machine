import { Product } from './product';

export type APIResponse = {
  data: Product[];
};

export enum Breakpoints {
  DesktopBreakpoint = '1200PX',
  LargeDesktopBreakpoint = '1500PX',
  LargeMobileBreakpoint = '576PX',
  LargeTabletBreakpoint = '992PX',
  MobileBreakpoint = '340PX',
  SmallMobileBreakpoint = '280PX',
  TabletBreakpoint = '768PX',
}

export type CustomPageProps = {
  pageProps: Record<string, unknown>;
};
