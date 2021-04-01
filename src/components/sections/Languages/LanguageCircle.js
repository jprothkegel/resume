import React from 'react';
import PropTypes from 'prop-types';
import { Box, CircularProgress, Tooltip } from '@material-ui/core';
import { LanguagesMapper } from '../../../helpers/LanguageHelper';
import { useTranslation } from 'react-i18next';
import { useLanguageCircleStyles } from './styles';

const LanguageCircle = ({ ...props }) => {
  const { language } = props;
  const classes = useLanguageCircleStyles();
  const { t } = useTranslation();
  return (
    <Tooltip title={t(`languages.${language}`)} arrow>
      <Box
        position="relative"
        display="inline-flex"
        marginLeft="10px"
        marginRight="10px"
      >
        <CircularProgress
          variant="determinate"
          value={LanguagesMapper.get(language).level}
          size={120}
          thickness={2}
          className={classes.bottom}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          alignContent="center"
        >
          <img
            className={classes.image}
            src={LanguagesMapper.get(language).image}
          />
        </Box>
      </Box>
    </Tooltip>
  );
};

LanguageCircle.propTypes = {
  language: PropTypes.string,
};

export default LanguageCircle;
