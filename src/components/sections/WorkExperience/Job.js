import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useJobStyles } from './styles';

const Job = ({ ...props }) => {
  const { title, charge, date, descriptions, link, image } = props;
  const classes = useJobStyles();

  return (
    <Paper className={classes.container}>
      <a href={link} target="_blank" rel="noreferrer" className={classes.link}>
        <Box display="flex" alignItems="center">
          <img className={classes.image} src={image} />
          <Typography className={classes.title}>{title} </Typography>
        </Box>
      </a>
      <Box marginTop="10px">
        <Box display="flex" flexDirection="column">
          <Typography className={classes.charge}>{charge} </Typography>
          <Typography className={classes.date}>{date} </Typography>
          <ul>
            {descriptions.map((description, index) => (
              <li key={index} className={classes.li}>
                {description}
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Paper>
  );
};

Job.propTypes = {
  title: PropTypes.string,
  charge: PropTypes.string,
  date: PropTypes.string,
  index: PropTypes.number,
  descriptions: PropTypes.array,
  link: PropTypes.string,
  mobile: PropTypes.bool,
  image: PropTypes.string,
};

export default Job;
