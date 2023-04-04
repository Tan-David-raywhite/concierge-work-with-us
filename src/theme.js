import { createTheme } from '@mui/material/styles';

export const fontFamilyBase = '"Lato"'
export const fontFamilyDisplay = '"Playfair Display"'

export const DarkerGrey = '#4B4B4B'
export const DarkestGrey = '#313131'
export const LightGrey = '#C4C4C4'
export const LighterGrey = '#EFEFEF'
export const LightestGrey = '#F8F8F9'

// A custom theme for this app
const headingStyle = {
  fontFamily: fontFamilyDisplay,
  color: '#595959',
  margin: 0,
  textDecorationColor: '#ffe512 !important',
  textDecorationThickness: '3px !important',
}

const subtitleStyle = {
  fontFamily: fontFamilyBase,
  letterSpacing: 0,
  color: '#595959',
  fontWeight: 300,
}

const theme = createTheme({
  palette: {
    paper: "#FFF",
    canvasColor: '#fff',
    primary: {
      main: "#ffe512",
      contrastText: '#595959',
    },
    secondary: {
      main: "#595959",
    },
    tertiary: {
      main: "#fff",
    },
    DarkerGrey: DarkerGrey,
    DarkestGrey: DarkestGrey,
    LightGrey: LightGrey,
    LighterGrey: LighterGrey,
    LightestGrey: LightestGrey,
    background: {
      default: '#fff',
      paper: "#595959"[50],
      elevation1: "#595959"[100],
      elevation2: "#595959"[200],
      elevation3: "#595959"[300],
    },
  },
  typography: {
    fontFamily: fontFamilyBase,
    Base: fontFamilyBase,
    Display: fontFamilyDisplay,
    h1: { ...headingStyle },
    h2: { ...headingStyle },
    h3: { ...headingStyle },
    h4: { ...headingStyle },
    h5: { ...headingStyle },
    h6: { ...headingStyle },
    p: { ...headingStyle, fontWeight: 300 },
    button: {
      color: '#595959',
      letterSpacing: '0.0875em',
      fontFamily: fontFamilyBase,
    },
    subtitle1: { ...subtitleStyle },
    subtitle2: { ...subtitleStyle },
    overline: {
      fontWeight: 600,
      letterSpacing: '0.0875em',
    },
    noWrap: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
  overrides: {
    MuiButton: {
      label: {
        color: "#fff",
      },
    },
    MuiPaper: {
       root: {
           backgroundColor: "#FFFFFF",
       },
   },
},
});

export default theme;
