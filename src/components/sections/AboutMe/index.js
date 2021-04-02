import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import Profile from '../../../assets/profile.jpeg'
import { useAboutMeStyles } from './styles';

const AboutMe = ({ ...props }) => {
  const { mobile } = props;
  const classes = useAboutMeStyles({ mobile });
  return (
    <div id="aboutme">
      <Box
        display="flex"
        flexDirection={mobile ? 'column' : 'row'}
        justifyContent="center"
        marginTop={mobile ? '50px' : '110px'}
      >
        <img className={classes.image} src={Profile} />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography className={classes.title}>Software Engineer</Typography>
          <Typography className={classes.name}>
            Juan Pablo Rothkegel Ide
          </Typography>
          <Typography className={classes.description}>
            LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

AboutMe.propTypes = {
  mobile: PropTypes.bool,
};

export default AboutMe;
