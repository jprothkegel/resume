import { createMuiTheme } from '@material-ui/core';

const MainTheme = createMuiTheme({
  typography: {
    fontFamily: ['Poppins'],
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#449dfc',
        },
      },
    },
  },
});

export default MainTheme;
