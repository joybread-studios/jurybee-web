import {extendTheme, ThemeConfig} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark', // or 'dark
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: '#ffd1d1',
      500: '#fe7979',
      700: '#cc5f5f',
    },
    secondary: {
      100: '#e2e0dc',
      500: '#ada696',
      700: '#7d786d',
    },
  },
  fonts: {
    heading: 'var(--font-rubik)',
    body: 'var(--font-rubik)',
  }
});

export default theme;
