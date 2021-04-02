import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import UniversityCard from './UniversityCard';
import { EDUCATION } from '../../../helpers/EducationHelper';

const Education = ({ ...props }) => {
  const { mobile } = props;
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {EDUCATION.map((college, index) => (
        <UniversityCard key={index} college={college} mobile={mobile} />
      ))}
    </Box>
  );
};

Education.propTypes = {
  mobile: PropTypes.bool,
};

export default Education;
