export const theme = Object.freeze({
  fonts: {
    logo: `"FONTSPRING DEMO - All Round Gothic Thick"`,
    logo2: `"CA Saygon Text"`,
    main: `'Oswald', sans-serif`,
    second: `'Fira Sans', sans-serif`,
    
  },
  
  fontSizes: [10, 12, 14, 16, 18, 20, 28, 48],
  fontWeights: {
    regular: 400,
    // medium: 500,
    // semibold: 600,
    bold: 700,
    // extrabold: 800,
  },
  colors: {
    accent: '#FF8356',
    background: '#FEF9F9',
    black: '#111111',
    yellow: '#FFC107',
    blue: '#54ADFF',
    blueGradient: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
    blueLight: '#CCE4FB',
    red: '#F43F5E',
    green: '#00C3AD',
    grey: '#888888',
    white: '#FFFFFF',
    orangeGradient: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
    backdrop: 'rgba(97, 97, 97, 0.6)',
    transparent: 'transparent',
  },
  shadows: {
    defaultShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    hoverShadow: '7px 13px 14px rgba(116, 177, 232, 0.24)',
  },
  media: {
    mobile: '(min-width: 320px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1280px)',
    mobileTablet: '(min-width: 320px) and (max-width: 767px)',
    tabletDesktop: '(min-width: 768px) and (max-width: 1279px)',
  },
});
