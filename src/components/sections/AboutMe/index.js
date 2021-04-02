import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import Profile from '../../../assets/profile.jpeg';
import { useAboutMeStyles } from './styles';
import { useTranslation } from 'react-i18next';

const AboutMe = ({ ...props }) => {
  const { mobile } = props;
  const classes = useAboutMeStyles({ mobile });
  const { t } = useTranslation();
  return (
    <div id="aboutme">
      <Box
        display="flex"
        flexDirection={mobile ? 'column' : 'row'}
        justifyContent="center"
        marginTop={mobile ? '50px' : '110px'}
        maxWidth="80%"
        margin='0 auto'
      >
        <img className={classes.image} src={Profile} />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography className={classes.title}>Software Engineer</Typography>
          <Typography className={classes.name}>
            Juan Pablo Rothkegel Ide
          </Typography>
          <Typography className={classes.description}>
            {t('aboutme.summary')}
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
