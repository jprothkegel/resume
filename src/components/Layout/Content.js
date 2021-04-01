import { Box } from '@material-ui/core';
import React from 'react';
import Section from '../common/Section';
import { titles } from '../../helpers/NavBarHelper';
import { SectionMapper } from '../../helpers/SectionHelper';

const Content = () => {
  return (
    <Box>
      {titles.map((title, index) => (
        <Section key={index} title={title}>
          {SectionMapper.get(title)}
        </Section>
      ))}
    </Box>
  );
};

export default Content;
