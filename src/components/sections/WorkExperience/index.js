import { Box } from '@material-ui/core';
import React from 'react';
import Job from './Job';
import { JOBS } from '../../../helpers/JobHelper';
import { useTranslation } from 'react-i18next';

const WorkExperience = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        {JOBS.map((job, index) => (
          <Job
            key={index}
            title={t(`jobs.${job}.title`)}
            charge={t(`jobs.${job}.charge`)}
            date={t(`jobs.${job}.date`)}
            descriptions={t(`jobs.${job}.descriptions`, { returnObjects: true })}
            index={index}
          />
        ))}
      </Box>
    </Box>
  );
};

export default WorkExperience;
