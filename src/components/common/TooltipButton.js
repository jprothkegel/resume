import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TooltipButton = ({ ...props }) => {
  const { title, icon, onClick } = props;
  return (
    <Tooltip title={title} arrow>
      <IconButton onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
      </IconButton>
    </Tooltip>
  );
};

TooltipButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
};

export default TooltipButton;
