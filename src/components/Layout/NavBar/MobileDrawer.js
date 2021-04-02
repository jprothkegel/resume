import React, { useState } from 'react';
import DrawerButton from './DrawerButton';
import NavDrawer from './NavDrawer';

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <DrawerButton onClick={() => setOpen(true)} />
      <NavDrawer open={open} onClose={() => setOpen(false)} />
    </React.Fragment>
  );
};

export default MobileDrawer;
