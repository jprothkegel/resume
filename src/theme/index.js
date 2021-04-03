import { createMuiTheme } from '@material-ui/core';

const MainTheme = createMuiTheme({
  typography: {
    fontFamily: ['Poppins'],
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#00aaad',
        },
      },
    },
  },
});

export default MainTheme;
