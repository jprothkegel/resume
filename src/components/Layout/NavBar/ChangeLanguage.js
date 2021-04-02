import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import TooltipButton from '../../common/TooltipButton';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { LanguageMapper } from '../../../helpers/LanguageHelper';
import { useChangeLanguageStyles } from './styles';

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en');
  const classes = useChangeLanguageStyles();

  const handleChange = () => {
    if (lang === 'en') setLang('es');
    else setLang('en');
  };

  const toggleLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    toggleLanguage(lang);
  }, [lang]);

  return (
    <Box display="flex" alignItems="center">
      <TooltipButton
        title={t('titles.change')}
        icon={faGlobeAmericas}
        onClick={handleChange}
        changeLanguage
      />
      <Typography className={classes.typo}>
        {LanguageMapper.get(lang)}
      </Typography>
    </Box>
  );
};

export default ChangeLanguage;
