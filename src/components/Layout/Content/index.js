import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Section from '../../common/Section';
import { titles } from '../../../helpers/NavBarHelper';
import { SectionMapper } from '../../../helpers/SectionHelper';

const Content = ({ ...props }) => {
  const { mobile } = props;
  return (
    <Box>
      {titles.map((title, index) => (
        <Section key={index} title={title} mobile={mobile}>
          {SectionMapper.get(title)}
        </Section>
      ))}
    </Box>
  );
};

Content.propTypes = {
  mobile: PropTypes.bool,
};

export default Content;
