import React from 'react';
import { Box, Grid } from '@material-ui/core';
import SkillContainer from './SkillContainer';
import { ADVANCES_SKILLS, BASIC_SKILLS } from '../../../helpers/SkillHelper';
import { faGraduationCap, faHammer } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <Box>
      <Grid container spacing={2} direction="row">
        <Grid item lg={6} xs={12}>
          <SkillContainer
            skills={ADVANCES_SKILLS}
            title={'Advanced Skills'}
            icon={faGraduationCap}
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <SkillContainer
            skills={BASIC_SKILLS}
            title={'Basic Skills'}
            icon={faHammer}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
