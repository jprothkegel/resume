import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const DrawerButton = ({ ...props }) => {
  const { onClick } = props;
  return (
    <IconButton onClick={onClick}>
      <FontAwesomeIcon icon={faBars} />
    </IconButton>
  );
};

DrawerButton.propTypes = {
  onClick: PropTypes.func,
};

export default DrawerButton;
