import React from 'react';
import { Box, Chip } from '@material-ui/core';
import { SKILLS } from '../../../helpers/SkillHelper';
import { useSkillsStyles } from './styles';

const Skills = () => {
  const classes = useSkillsStyles();
  return (
    <Box className={classes.container}>
      {SKILLS.map((skill, index) => (
        <Chip key={index} label={skill} />
      ))}
    </Box>
  );
};

export default Skills;
