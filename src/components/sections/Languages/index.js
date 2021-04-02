import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import LanguageCircle from './LanguageCircle';
import { LANGUAGES } from '../../../helpers/LanguageHelper';

const Languages = ({ ...props }) => {
  const { mobile } = props;
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection={mobile ? 'column' : 'row'}
    >
      {LANGUAGES.map((language, index) => (
        <LanguageCircle key={index} language={language} mobile={mobile} />
      ))}
    </Box>
  );
};

Languages.propTypes = {
  mobile: PropTypes.bool,
};

export default Languages;
