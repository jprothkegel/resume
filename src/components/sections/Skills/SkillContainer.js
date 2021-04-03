import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSkillContainerStyles } from './styles';

const SkillContainer = ({ ...props }) => {
  const { title, skills, icon } = props;
  const classes = useSkillContainerStyles();
  return (
    <Paper className={classes.container}>
      <Box display="flex" alignItems="center">
        <FontAwesomeIcon size="2x" icon={icon} />
        <Typography className={classes.title}>{title} </Typography>
      </Box>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </Paper>
  );
};

SkillContainer.propTypes = {
  title: PropTypes.string,
  skills: PropTypes.array,
  icon: PropTypes.object,
};

export default SkillContainer;
