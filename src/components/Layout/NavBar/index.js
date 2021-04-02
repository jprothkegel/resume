import React from 'react';
import PropTypes from 'prop-types';
import { Box, AppBar, Toolbar } from '@material-ui/core';
import NavButtons from './NavButtons';
import ChangeLanguage from './ChangeLanguage';
import MobileDrawer from './MobileDrawer';

const NavBar = ({ ...props }) => {
  const { mobile } = props;
  return (
    <React.Fragment>
      {!mobile && (
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <ChangeLanguage />
          <NavButtons />
        </Box>
      )}
      {mobile && (
        <AppBar position="fixed" color="inherit" elevation={0}>
          <Toolbar>
            <Box display="flex" justifyContent="space-between" width="100%">
              <ChangeLanguage />
              <MobileDrawer />
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </React.Fragment>
  );
};

NavBar.propTypes = {
  mobile: PropTypes.bool,
};

export default NavBar;
