import React from 'react';
import { Box } from '@material-ui/core';
import NavButtons from './NavButtons';
import SocialMedia from './SocialMedia';
import ChangeLanguage from './ChangeLanguage';

const NavBar = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <ChangeLanguage />
      <NavButtons />
      <SocialMedia />
    </Box>
  );
};

export default NavBar;
