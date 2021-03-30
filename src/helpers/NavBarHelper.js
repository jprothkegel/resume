import {
  faBriefcase,
  faUser,
  faBrain,
  faUniversity,
  faLanguage,
  faTableTennis,
} from '@fortawesome/free-solid-svg-icons';

export const titles = [
  'aboutme',
  'work',
  'skills',
  'edu',
  'lang',
  'hobbies',
];

export const titleIconMapper = new Map([
  ['aboutme', faUser],
  ['work', faBriefcase],
  ['skills', faBrain],
  ['edu', faUniversity],
  ['lang', faLanguage],
  ['hobbies', faTableTennis],
]);
