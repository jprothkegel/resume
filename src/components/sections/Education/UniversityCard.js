import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useUniversityCardStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { eduToPhotoMapper } from '../../../helpers/EducationHelper';

const UniversityCard = ({ ...props }) => {
  const { college } = props;
  const classes = useUniversityCardStyles();
  const { t } = useTranslation();
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt={t(`education.${college}.name`)}
        height="140"
        image={eduToPhotoMapper.get(college).image}
        title="University"
      />
      <CardContent>
        <Typography className={classes.title}>
          {t(`education.${college}.carrer`)}
        </Typography>
        <a
          href={eduToPhotoMapper.get(college).link}
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
          <Typography>{t(`education.${college}.name`)} </Typography>
        </a>
        <Typography className={classes.dateAndPlace}>
          {t(`education.${college}.place`)}
        </Typography>
        <Typography className={classes.dateAndPlace}>
          {t(`education.${college}.date`)}
        </Typography>
      </CardContent>
    </Card>
  );
};

UniversityCard.propTypes = {
  college: PropTypes.string,
};

export default UniversityCard;
