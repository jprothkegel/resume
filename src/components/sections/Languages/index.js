import React from 'react';
import { Box } from '@material-ui/core';
import LanguageCircle from './LanguageCircle';
import { LANGUAGES } from '../../../helpers/LanguageHelper';

const Languages = () => {
  return (
    <Box display="flex" justifyContent="center">
      {LANGUAGES.map((language, index) => (
        <LanguageCircle key={index} language={language} />
      ))}
    </Box>
  );
};

export default Languages;
