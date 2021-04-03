import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';
import { useLayoutStyles } from './styles';

const Layout = ({ ...props }) => {
  const { mobile } = props;
  const classes = useLayoutStyles({ mobile });

  return (
    <Paper className={classes.container}>
      <NavBar mobile={mobile} />
      <Content mobile={mobile} />
      <Footer mobile={mobile} />
    </Paper>
  );
};

Layout.propTypes = {
  mobile: PropTypes.bool,
};

export default Layout;
