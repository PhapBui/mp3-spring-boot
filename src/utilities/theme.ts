import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { responsiveFontSizes } from '@mui/material';

// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: '#0a68ff',
    },
    secondary: {
      light: '#EDF7FA',
      main: '#00A8CC',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          scrollBehavior: 'smooth',
          '& *::-webkit-scrollbar': {
            borderRadius: 0,
            width: '8px',
          },
          '& *::-webkit-scrollbar-thumb': {
            borderRadius: '4px',
            backgroundColor: 'rgba(22, 24, 35, 0.16)',
          },
          '& *::-webkit-scrollbar-track': {
            borderRadius: 0,
            backgroundColor: 'rgba(0, 0, 0, 0)',
          },
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
        'ul,li,ol': {
          listStyle: 'none',
        },
        'button,input,optgroup,select,textarea': {
          padding: '0',
          border: 'none',
          font: 'inherit',
          color: 'inherit',
          backgroundColor: 'transparent',
          wordBreak: 'normal',
        },
        span: {
          fontSize: '14px',
          lineHeight: 'normal',
          fontWeight: 'inherit',
        },
        '.flex': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '.flex-item': {
          alignItems: 'center',
          display: 'flex',
          flexBasis: 'auto',
          flexGrow: '0',
          flexShrink: '0',
          justifyContent: 'center',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export let cssVariables = {
  width: {
    sidebar: '240px',
    playlist: '330px',
    logo: '120px',
  },
  height: {
    player: '90px',
    header: '70px',
    addToPlaylist: '54px',
    logo: '40px',
  },
  padding: {
    paddingSection: '59px',
  },
  color: {
    backgroundTooltip: '#e8e8e8',
    layoutbg: '#170f23',
    layoutHeaderBg: 'rgba(23,15,35,0.8)',

    playerBg: '#130c1c',
    sidebarBg: '#2a213a',
    primaryBg: '#34224f',
    alphaBg: 'hsla(0,0%,100%,0.1)',
    tabActiveBg: 'hsla(0,0%,100%,0.3)',

    gradientLatestSectionArtist:
      'linear-gradient(286.07deg,rgba(23,15,35,0.95) 55.21%,rgba(23,15,35,0.6))',
    alphaLayoutBg: 'rgba(41,21,71,0.8)',
    queuePlayerPopupBg: '#120822',
    blurQueueBg: 'rgba(30,21,47,0.9019607843137255)',
    purplePrimary: '#9b4de0',
    linkTextHover: '#c273ed',
    chartBgImgAlpha: 'rgba(32,19,53,0.9)',

    textNavigation: '#dadada',
    textPlaceholder: '#dadada',
    textPrimary: '#fff',
    textSecondary: ' hsla(0,0%,100%,0.5)',
    textSearch: '#eee',
    textPlayer: '#fff',
    textItemHover: '#fff',

    white: '#fff',
    black: '#32323d',
    yellow: '#f8e71c',
    blue: '#4a90e2',
    green: '#50e3c2',
    red: '#e35050',
    gray: '#dbdbdb',
    darkAlpha10: 'rgba(0,0,0,0.1)',
    darkAlpha50: 'rgba(0,0,0,0.5)',
    darkAlpha70: 'rgba(0,0,0,0.7)',
    darkAlpha80: 'rgba(0,0,0,0.8)',
    hoverTooltipOpacity: 'hsla(0,0%,100%,0.3)',

    stickyHeaderBoxShadow: 'rgba(0,0,0,0.1)',
  },
  border: {
    color: {
      primary: 'hsla(0,0%,100%,0.1)',
      secondary: ' hsla(0,0%,100%,0.05)',
    },
  },
  margin: {
    topSection: '48px',
  },
  iconSize: {
    normal: '20px',
    player: '45px',
  },
};

theme = responsiveFontSizes(theme);
