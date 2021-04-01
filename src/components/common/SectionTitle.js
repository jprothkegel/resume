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
      backgroundColor: '#007ced',
      height: 2,
      width: '40px',
      content: '""',
    },
  },
}));

const SectionTitle = ({ ...props }) => {
  const { title } = props;
  const classes = useStyles();
  return <Typography className={classes.title}>{title}</Typography>;
};

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
