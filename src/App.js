import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import MainTheme from './theme';
import Layout from './components/Layout';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
