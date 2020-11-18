module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    colors: {
      white: '#FFF',
      pink: '#F9D9F9',
      orange: '#FC9B59',
      red: '#FF1300',
      blue: '#0000FF',
      turquoise: '#00FFFF',
      magenta: '#FF00FF',
      coal: '#282828',
    },
    boxShadow: {
      'sharp-magenta': '20px 20px 0px 3px #FF00FF'
    },
    extend: {
      inset: {
        '-12': '-4rem',
        '-24': '-8rem',
      }
    },
  },
  variants: {},
  plugins: [],
};
