import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import UniversityCard from './UniversityCard';
import { EDUCATION } from '../../../helpers/EducationHelper';

const Education = ({ ...props }) => {
  const { mobile } = props;
  return (
    <Grid container spacing={3}>
      {EDUCATION.map((college, index) => (
        <Grid key={index} item lg={6} xs={12}>
          <UniversityCard college={college} mobile={mobile} />
        </Grid>
      ))}
    </Grid>
  );
};

Education.propTypes = {
  mobile: PropTypes.bool,
};

export default Education;
