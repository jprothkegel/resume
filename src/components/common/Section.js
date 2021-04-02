import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Section = ({ ...props }) => {
  const { children, title, mobile } = props;
  const { t } = useTranslation();
  return (
    <Box marginTop="60px">
      {title !== 'aboutme' && (
        <SectionTitle title={t(`titles.${title}`)} link={title} />
      )}
      {React.cloneElement(children, { mobile })}
    </Box>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  mobile: PropTypes.bool,
};

export default Section;
