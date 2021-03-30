import { createMuiTheme } from "@material-ui/core";

const MainTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#449dfc",
        },
      },
    },
  },
});

export default MainTheme;
