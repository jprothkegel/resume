import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { titles, titleIconMapper } from '../../../helpers/NavBarHelper';
import TooltipButton from '../../common/TooltipButton';
import { useTranslation } from 'react-i18next';

const NavButtons = ({ ...props }) => {
  const { mobile } = props;
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection={mobile ? 'column' : 'row'}>
      {titles.map((title, index) => (
        <TooltipButton
          key={index}
          title={t(`titles.${title}`)}
          icon={titleIconMapper.get(title)}
          onClick={() => {}}
          link={title}
          mobile={mobile}
        />
      ))}
    </Box>
  );
};

NavButtons.propTypes = {
  mobile: PropTypes.bool,
};

export default NavButtons;
