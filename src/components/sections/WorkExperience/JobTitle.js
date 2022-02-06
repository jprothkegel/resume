import React from "react";
import { Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useJobStyles } from './styles';

const JobTitle = ({...props}) => {
  const { link, image, title } = props;
  const classes = useJobStyles();

  return (
    <a href={link} target="_blank" rel="noreferrer" className={classes.link}>
      <Paper className={classes.titleContainer}>
        <Typography className={classes.title}>{title}</Typography>
        <img className={classes.image} src={image} alt="image"/>
      </Paper>
    </a>
  )
}

JobTitle.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

export default JobTitle;