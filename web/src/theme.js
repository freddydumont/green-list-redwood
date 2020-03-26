import { tailwind } from '@theme-ui/presets'

const buttonBase = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'md',
  py: [3, null, 4],
  px: [8, null, 10],
  fontSize: ['base', null, 'lg'],
  fontWeight: 'medium',
  lineHeight: 6,
  cursor: 'pointer',
  transition: 'all 100ms ease-in-out',

  '&:focus': {
    outline: 0,
    boxShadow: 'outline',
  },
}

const fontSizes = {
  xs: '.75rem',
  sm: '.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '4rem',
}

/**
 * If you see an empty object in the theme, see below the theme object
 * for its definition.
 */
const theme = {
  ...tailwind,
  useCustomProperties: true,
  useColorSchemeMediaQuery: true,
  colors: {
    ...tailwind.colors,
    // refactoring UI palette 3
    blue: [
      'hsl(195, 100%, 95%)',
      'hsl(195, 100%, 85%)',
      'hsl(195, 97%, 75%)',
      'hsl(196, 94%, 67%)',
      'hsl(197, 92%, 61%)',
      'hsl(199, 84%, 55%)',
      'hsl(201, 79%, 46%)',
      'hsl(202, 83%, 41%)',
      'hsl(203, 87%, 34%)',
      'hsl(204, 96%, 27%)',
    ],
    indigo: [
      '#f0f5ff',
      '#e5edff',
      '#cddbfe',
      '#b4c6fc',
      '#8da2fb',
      '#6875f5',
      '#5850ec',
      '#5145cd',
      '#42389d',
      '#362f78',
    ],
    gray: [
      'hsl(210, 36%, 96%)',
      'hsl(212, 33%, 89%)',
      'hsl(210, 31%, 80%)',
      'hsl(211, 27%, 70%)',
      'hsl(209, 23%, 60%)',
      'hsl(210, 22%, 49%)',
      'hsl(209, 28%, 39%)',
      'hsl(209, 34%, 30%)',
      'hsl(211, 39%, 23%)',
      'hsl(209, 61%, 16%)',
    ],
    purple: [
      'hsl(240, 100%, 95%)',
      'hsl(238, 100%, 88%)',
      'hsl(238, 94%, 81%)',
      'hsl(240, 95%, 76%)',
      'hsl(243, 94%, 70%)',
      'hsl(243, 94%, 66%)',
      'hsl(245, 92%, 60%)',
      'hsl(245, 79%, 52%)',
      'hsl(245, 86%, 40%)',
      'hsl(245, 100%, 27%)',
    ],
    red: [
      'hsl(360, 100%, 95%)',
      'hsl(360, 100%, 87%)',
      'hsl(360, 100%, 80%)',
      'hsl(360, 91%, 69%)',
      'hsl(360, 83%, 62%)',
      'hsl(356, 75%, 53%)',
      'hsl(354, 85%, 44%)',
      'hsl(352, 90%, 35%)',
      'hsl(350, 94%, 28%)',
      'hsl(348, 94%, 20%)',
    ],
    teal: [
      'hsl(152, 68%, 96%)',
      'hsl(154, 75%, 87%)',
      'hsl(156, 73%, 74%)',
      'hsl(158, 58%, 62%)',
      'hsl(160, 51%, 49%)',
      'hsl(162, 63%, 41%)',
      'hsl(164, 71%, 34%)',
      'hsl(166, 72%, 28%)',
      'hsl(168, 80%, 23%)',
      'hsl(170, 97%, 15%)',
    ],
    yellow: [
      'hsl(49, 100%, 96%)',
      'hsl(48, 100%, 88%)',
      'hsl(48, 95%, 76%)',
      'hsl(48, 94%, 68%)',
      'hsl(44, 92%, 63%)',
      'hsl(42, 87%, 55%)',
      'hsl(36, 77%, 49%)',
      'hsl(29, 80%, 44%)',
      'hsl(22, 82%, 39%)',
      'hsl(15, 86%, 30%)',
    ],
    // dark mode and other colors are defined below
    modes: {
      dark: {},
    },
  },
  sizes: {
    ...tailwind.sizes,
    72: '18rem',
    96: '24rem',
    'screen-sm': '640px',
    'screen-md': '768px',
    'screen-lg': '1024px',
    'screen-xl': '1280px',
  },
  fontSizes,
  space: {
    ...tailwind.sizes,
    28: '7rem',
  },
  lineHeights: {
    ...tailwind.lineHeights,
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
  variants: {
    box: {
      form: {
        mb: 4,
      },
      // in error state, the margin is on the error component
      formError: {
        mb: 1,
      },
    },
  },
  forms: {
    input: {
      height: 12,
      mb: 4,
      bg: 'inputBg',
      borderColor: 'muted',
      outline: 'none',
      transition: 'all 100ms ease-in-out',
      '&:hover': {
        borderColor: 'textMuted',
      },
      '&:focus': {
        boxShadow: 'outline',
      },
    },
    inputError: {},
    inputValid: {},
    label: {
      mb: 1,
      lineHeight: 'normal',
      fontWeight: 'bold',
      width: 'max-content',
    },
    radio: {},
    checkbox: {},
  },
  layout: {
    container: {
      maxWidth: 1024,
      mx: 'auto',
      py: 3,
      px: 4,
    },
  },
  buttons: {
    ...tailwind.buttons,
    primary: {
      ...buttonBase,
      bg: 'primary',
      color: 'white',

      '&:hover': {
        bg: 'primaryHover',
      },
    },
    gray: {
      ...buttonBase,
      color: 'indigo.7',
      bg: 'indigo.1',

      '&:hover': {
        color: 'indigo.6',
        bg: 'indigo.0',
      },

      '&focus': {
        borderColor: 'indigo.3',
      },
    },
    outline: {
      ...tailwind.buttons.outline,
      ...buttonBase,
    },
    // form styles are defined below because of self-referencement
    form: {},
    secondary: {
      cursor: 'pointer',
      bg: 'secondary',
      '&:hover': {
        bg: 'secondaryHover',
        boxShadow: 'default',
      },
    },
  },
  links: {
    nav: {
      fontFamily: 'body',
    },
  },
}

theme.colors = {
  ...theme.colors,
  primary: theme.colors.purple[6],
  primaryHover: theme.colors.purple[5],
  secondary: theme.colors.teal[5],
  secondaryHover: theme.colors.teal[3],
  dark: theme.colors.gray[9],
  grayDark: theme.colors.gray[9],
  background: theme.colors.light,
  inputBg: theme.colors.white,
  text: theme.colors.gray[8],
  textMuted: theme.colors.gray[5],
  danger: theme.colors.red[3],
  textDanger: theme.colors.red[6],
  warning: theme.colors.yellow[3],
  info: theme.colors.blue[4],
  success: theme.colors.green[3],
  successDark: theme.colors.green[4],
  muted: theme.colors.gray[2],
  highlight: theme.colors.purple[0],
  highlightMore: theme.colors.purple[1],
  modes: {
    dark: {
      background: theme.colors.gray[9],
      text: theme.colors.gray[0],
      textMuted: theme.colors.gray[5],
      textDanger: theme.colors.red[2],
      light: theme.colors.gray[8],
      inputBg: theme.colors.gray[8],
      muted: theme.colors.gray[6],
    },
  },
}

theme.buttons.form = {
  ...theme.buttons.primary,
  mr: 2,
  '&:last-child': {
    mr: 0,
  },
}

const radioAndCheckbox = {
  color: 'textMuted',
  transition: 'all 100ms ease-in-out',
  // this selector is found in the radio/checkbox theme-ui source code
  'input:hover ~ &': {
    color: 'primary',
    bg: 'highlight',
  },
}

theme.forms.checkbox = radioAndCheckbox
theme.forms.radio = radioAndCheckbox

theme.forms.inputError = {
  ...theme.forms.input,
  boxShadow: 'error',
  border: 'none',
  mb: 1,
}

theme.forms.inputValid = {
  ...theme.forms.input,
  boxShadow: 'valid',
  border: 'none',
  '&:hover, &:focus': {
    boxShadow: 'validHover',
  },
}

theme.shadows = {
  ...theme.shadows,
  outline: `0 0 0 3px ${theme.colors.highlightMore}`,
  error: `0 0 2px 3px ${theme.colors.danger}`,
  valid: `0 0 0 3px ${theme.colors.success}`,
  validHover: `0 0 0 3px ${theme.colors.successDark}`,
}

export default theme
