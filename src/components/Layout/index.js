import React from 'react';
import { Paper } from '@material-ui/core';
import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';
import { useLayoutStyles } from './styles';

const Layout = () => {
  const classes = useLayoutStyles();
  return (
    <Paper className={classes.container}>
      <NavBar />
      <Content />
      <Footer />
    </Paper>
  );
};

export default Layout;
