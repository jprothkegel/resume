import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import JobTitle from './JobTitle';
import JobDescription from './JobDescription';

const Job = ({ ...props }) => {
  const { title, charge, date, descriptions, link, image } = props;

  return (
    <Box>
      <JobTitle title={title} link={link} image={image} />
      <JobDescription charge={charge} date={date} descriptions={descriptions} />
    </Box>
  );
};

Job.propTypes = {
  title: PropTypes.string,
  charge: PropTypes.string,
  date: PropTypes.string,
  index: PropTypes.number,
  descriptions: PropTypes.string,
  link: PropTypes.string,
  mobile: PropTypes.bool,
  image: PropTypes.string,
};

export default Job;
