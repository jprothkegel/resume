import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@material-ui/core';
import NavButtons from './NavButtons';

const NavDrawer = ({ ...props }) => {
  const { open, onClose } = props;
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <NavButtons mobile />
    </Drawer>
  );
};

NavDrawer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default NavDrawer;
