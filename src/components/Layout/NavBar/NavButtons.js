import React from 'react';
import { Box } from '@material-ui/core';
import { titles, titleIconMapper } from '../../../helpers/NavBarHelper';
import TooltipButton from '../../common/TooltipButton';
import { useTranslation } from 'react-i18next';

const NavButtons = () => {
  const { t } = useTranslation();
  return (
    <Box display="flex">
      {titles.map((title, index) => (
        <TooltipButton
          key={index}
          title={t(`titles.${title}`)}
          icon={titleIconMapper.get(title)}
          onClick={() => {}}
        />
      ))}
    </Box>
  );
};

export default NavButtons;
