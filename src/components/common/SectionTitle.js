import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 21,
    position: 'relative',
    display: 'inline-block',
    margin: '0px 0px 30px',
    zIndex: 1,
    paddingBottom: 7,
    '&::after': {
      display: 'block',
      position: 'absolute',
      backgroundColor: '#00aaad',
      height: 2,
      width: '40px',
      content: '""',
    },
  },
}));

const SectionTitle = ({ ...props }) => {
  const { title, link } = props;
  const classes = useStyles();
  return (
    <div id={link}>
      <Typography className={classes.title}>{title}</Typography>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

export default SectionTitle;
