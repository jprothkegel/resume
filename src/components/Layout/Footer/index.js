import { Box } from '@material-ui/core';
import React from 'react';

const Footer = () => {
  return (
    <Box marginTop="50px" textAlign="right">
      {new Date().getFullYear()} - Juan Pablo Rothkegel Ide
    </Box>
  );
};

export default Footer;
