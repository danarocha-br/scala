//@ts-noCheck
import Stitches, { createStitches } from '@stitches/react';

import {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  radii,
  spacing,
  fontFamily,
  elevation,
  light,
  dark,
} from '@e-scala/design-tokens';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
} = createStitches({
  theme: {
    colors: { ...color, ...light },
    fonts: fontFamily,
    fontSizes: fontSize,
    fontWeights: fontWeight,
    lineHeights: lineHeight,
    radii: radii,
    space: spacing,
    sizes: spacing,
    shadows: elevation,
    zIndices: {
      1: '1',
      2: '2',
      3: '3',
      100: '100',
      max: '999',
    },
    transitions: {
      base: '0.3s ease-in-out',
      slow: '0.5s ease-in-out',
      fast: '0.15s ease-in-out',
    },
  },
  media: {
    'bp-sm': '(min-width: 520px)',
    'bp-md': '(min-width: 900px)',
    'bp-lg': '(min-width: 1200px)',
    'bp-xl': '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(unknown-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  // themeMap: {
  //   ...defaultThemeMap,
  //   height: 'space',
  //   width: 'space',
  // },
  utils: {
    d: (value: unknown) => ({
      display: value,
    }),
    p: (value: unknown) => ({
      padding: value,
    }),
    pt: (value: unknown) => ({
      paddingTop: value,
    }),
    pr: (value: unknown) => ({
      paddingRight: value,
    }),
    pb: (value: unknown) => ({
      paddingBottom: value,
    }),
    pl: (value: unknown) => ({
      paddingLeft: value,
    }),
    px: (value: unknown) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: unknown) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: unknown) => ({
      margin: value,
    }),
    mt: (value: unknown) => ({
      marginTop: value,
    }),
    mr: (value: unknown) => ({
      marginRight: value,
    }),
    mb: (value: unknown) => ({
      marginBottom: value,
    }),
    ml: (value: unknown) => ({
      marginLeft: value,
    }),
    mx: (value: unknown) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: unknown) => ({
      marginTop: value,
      marginBottom: value,
    }),

    spaceY: (value: unknown) => ({
      marginTop: `calc(${value} * calc(1 - 0))`,
      marginBottom: `calc(${value} * 0)`,
    }),

    spaceX: (value: unknown) => ({
      marginLeft: `calc(${value} * calc(1 - 0))`,
      marginRight: `calc(${value} * 0)`,
    }),

    fd: (value: unknown) => ({
      flexDirection: value,
    }),

    align: (value: unknown) => ({
      alignItems: value,
    }),

    ac: (value: unknown) => ({
      alignContent: value,
    }),

    justify: (value: unknown) => ({
      justifyContent: value,
    }),

    bg: (value: unknown) => ({
      backgroundColor: value,
    }),

    radii: (value: unknown) => ({
      borderRadius: value,
    }),
    btrr: (value: unknown) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: unknown) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: unknown) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: unknown) => ({
      borderTopLeftRadius: value,
    }),

    shadow: (value: unknown) => ({ boxShadow: value }),

    lh: (value: unknown) => ({
      lineHeight: value,
    }),

    ox: (value: unknown) => ({ overflowX: value }),
    oy: (value: unknown) => ({ overflowY: value }),

    pe: (value: unknown) => ({
      pointerEvents: value,
    }),

    userSelect: (value: unknown) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: unknown) => ({
      width: value,
      height: value,
    }),

    w: (value: unknown) => ({
      width: value,
    }),

    h: (value: unknown) => ({
      height: value,
    }),

    appearance: (value: unknown) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...dark,
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    margin: 0,
    color: '$text-body',
    backgroundColor: '$background-default',
  },

  button: {
    border: 'none',
    outline: 'none',
  },

  'body, button': {
    color: '$text-on-interactive',
    fontFamily: '$sans',
    fontSize: '$md',
  },

  '[disabled]': {
    cursor: 'not-allowed',
  },

  'html, body, #root, #__next, #__next > div': {
    height: '100%',
    zIndex: 0,

    '@bp-md': {
      height: 'auto',
    },
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  'button, input, textarea': {
    fontFamily: '$sans',
    fontDisplay: 'swap',
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$brand-primary',
  },

  'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus':
    {
      boxShadow: '0 0 0px 4px hsla(21, 100%, 91%, 1) inset !important',
      transition: 'background-color 5000s ease-in-out 0s',
      filter: 'none',
    },
});
