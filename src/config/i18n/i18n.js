import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './languages/en.json';
import es from './languages/es.json';

const resources = { en, es };

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  interpolation: { escapeValue: false },
});

export default i18n;
