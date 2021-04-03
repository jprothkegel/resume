import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Job from './Job';
import { JOBS, jobMapper } from '../../../helpers/JobHelper';
import { useTranslation } from 'react-i18next';

const WorkExperience = ({ ...props }) => {
  const { mobile } = props;
  const { t } = useTranslation();
  return (
    <Grid container spacing={2}>
      {JOBS.map((job, index) => (
        <Grid key={index} item lg={4} xs={12}>
          <Job
            key={index}
            title={t(`jobs.${job}.title`)}
            charge={t(`jobs.${job}.charge`)}
            date={t(`jobs.${job}.date`)}
            descriptions={t(`jobs.${job}.descriptions`, {
              returnObjects: true,
            })}
            link={jobMapper.get(job).link}
            image={jobMapper.get(job).image}
            mobile={mobile}
          />
        </Grid>
      ))}
    </Grid>
  );
};

WorkExperience.propTypes = {
  mobile: PropTypes.bool,
};

export default WorkExperience;
