import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip, Box, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));

const TooltipButton = ({ ...props }) => {
  const { title, icon, onClick, link, mobile, changeLanguage } = props;
  const classes = useStyles();
  return (
    <Tooltip title={title} arrow>
      <a href={changeLanguage ? null : `/#${link}`} className={classes.link}>
        <Box
          display="flex"
          alignItems="center"
          marginRight={mobile ? '10px' : 0}
        >
          <IconButton onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
          </IconButton>
          {mobile && <Typography>{title} </Typography>}
        </Box>
      </a>
    </Tooltip>
  );
};

TooltipButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  link: PropTypes.string,
  mobile: PropTypes.bool,
  changeLanguage: PropTypes.bool,
};

export default TooltipButton;
