import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import MainTheme from './theme';
import Layout from './components/Layout';
import { CssBaseline } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });
  return (
    <ThemeProvider theme={MainTheme}>
      <CssBaseline />
      <Layout mobile={isMobile} />
    </ThemeProvider>
  );
}

export default App;
