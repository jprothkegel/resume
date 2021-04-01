import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Photo from '../../../assets/photo.jpeg';
import { useAboutMeStyles } from './styles';

const AboutMe = () => {
  const classes = useAboutMeStyles();
  return (
    <Box display="flex" justifyContent="center" marginTop="110px">
      <img className={classes.image} src={Photo} />
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Typography className={classes.title}>Software Engineer</Typography>
        <Typography className={classes.name}>Juan Pablo Rothkegel Ide</Typography>
        <Typography className={classes.description}>
          LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
