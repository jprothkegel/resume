import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Job from './Job';
import { JOBS, jobMapper } from '../../../helpers/JobHelper';
import { useTranslation } from 'react-i18next';

const WorkExperience = ({ ...props }) => {
  const { mobile } = props;
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {JOBS.map((job, index) => (
        <Job
          key={index}
          title={t(`jobs.${job}.title`)}
          charge={t(`jobs.${job}.charge`)}
          date={t(`jobs.${job}.date`)}
          descriptions={t(`jobs.${job}.descriptions`, {
            returnObjects: true,
          })}
          index={index}
          link={jobMapper.get(job)}
          mobile={mobile}
        />
      ))}
    </Box>
  );
};

WorkExperience.propTypes = {
  mobile: PropTypes.bool,
};

export default WorkExperience;
