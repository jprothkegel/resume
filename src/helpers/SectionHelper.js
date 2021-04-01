import React from 'react';
import AboutMe from '../components/sections/AboutMe';
import WorkExperience from '../components/sections/WorkExperience';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Languages from '../components/sections/Languages';

export const SectionMapper = new Map([
  ['aboutme', <AboutMe key={0} />],
  ['work', <WorkExperience key={1} />],
  ['skills', <Skills key={2} />],
  ['edu', <Education key={3} />],
  ['lang', <Languages key={4} />],
]);
