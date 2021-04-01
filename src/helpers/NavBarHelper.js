import {
  faBriefcase,
  faUser,
  faBrain,
  faUniversity,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons';

export const titles = ['aboutme', 'work', 'skills', 'edu', 'lang'];

export const titleIconMapper = new Map([
  ['aboutme', faUser],
  ['work', faBriefcase],
  ['skills', faBrain],
  ['edu', faUniversity],
  ['lang', faLanguage],
]);
