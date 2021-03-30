import React from 'react';
import { Box } from '@material-ui/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { GITHUB, LINKEDIN } from '../../../config/paths';
import TooltipButton from '../../common/TooltipButton'

const SocialMedia = () => {
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Box display="flex">
      <TooltipButton title="GitHub" icon={faGithub} onClick={() => handleClick(GITHUB)} />
      <TooltipButton title="Linkedin" icon={faLinkedin} onClick={() => handleClick(LINKEDIN)} />
    </Box>
  );
};

export default SocialMedia;
