/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import theme from './themes';

export type Theme = typeof theme;

declare module 'styled-components' {
  declare export interface DefaultTheme extends Theme {}
}
