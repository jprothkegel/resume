import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import SocialMedia from '../NavBar/SocialMedia';

const Footer = ({ ...props }) => {
  const { mobile } = props;
  return (
    <Box
      marginTop="70px"
      display="flex"
      flexDirection={mobile ? 'column' : 'row'}
      justifyContent="space-between"
      alignItems={mobile ? 'center' : ''}
    >
      <SocialMedia />
      <Typography>
        {new Date().getFullYear()} - Juan Pablo Rothkegel Ide
      </Typography>
    </Box>
  );
};

Footer.propTypes = {
  mobile: PropTypes.bool,
};

export default Footer;
