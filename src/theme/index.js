import { createMuiTheme } from '@material-ui/core/styles';

const MainTheme = createMuiTheme({
  typography: {
    fontFamily: ['Roboto'],
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#00aaad',
        },
        html: {
          scrollBehavior: 'smooth'
        }
      },
    },
  },
});

export default MainTheme;
