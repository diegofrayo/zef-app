// npm libs
import chroma from 'chroma-js';

const TONES = [100, 200, 300, 400, 500, 600, 700];

// palette: https://coolors.co/20bf55-0b4f6c-01baef-fbfbff-757575
const GREEN = '#20BF55';
const DARK_BLUE = '#0B4F6C';
const LIGHT_BLUE = '#01BAEF';
const LIGHT_GRAY = '#FBFBFF';
const DARK_GRAY = '#757575';

export const theme = {

  headerHeight: 50,
  maxWidthContainer: 500,

  spacing: {
    base: 10,
    small: 5,
    normal: 10,
    medium: 15,
    large: 20,
  },

  fontSize: {
    base: 16,
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 18,
    xlarge: 20,
  },

  fontWeight: {
    thin: 100,
    normal: 400,
    semibold: 500,
    bold: 700,
  },

  color: {

    black: TONES.reduce((acum, current, index) => {
      // eslint-disable-next-line
      acum[current] = chroma('#333')
        .darken((index) * 0.2)
        .hex();
      return acum;
    }, {}),

    white: TONES.reduce((acum, current, index) => {
      // eslint-disable-next-line
      acum[current] = chroma('#FFF')
        .darken((index) * 0.2)
        .hex();
      return acum;
    }, {}),

    blue: TONES.reduce((acum, current, index) => {
      // eslint-disable-next-line
      acum[current] = chroma(LIGHT_BLUE)
        .darken((index) * 0.2)
        .hex();
      return acum;
    }, {}),

    textPrimary: {
      base: DARK_GRAY,
    },

    textSecondary: {
      base: LIGHT_GRAY,
    },

    brandPrimary: {
      base: GREEN,
    },

    brandSecondary: {
      base: DARK_BLUE,
    },

  },

};

export default fn => fn(theme);
