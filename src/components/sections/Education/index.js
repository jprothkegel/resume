import React from 'react';
import { Box } from '@material-ui/core';
import UniversityCard from './UniversityCard';
import { EDUCATION } from '../../../helpers/EducationHelper';

const Education = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {EDUCATION.map((college, index) => (
        <UniversityCard key={index} college={college} />
      ))}
    </Box>
  );
};

export default Education;
