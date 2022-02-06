import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useJobStyles } from './styles';
import ShowMore from './ShowMore';

const JobDescription = ({ ...props }) => {
  const { charge, date, descriptions } = props;
  const classes = useJobStyles();
  const [showLess, setShowLess] = useState(false);
  const [textToShow, setTextToShow] = useState('');

  const showMoreText = (text) => {
    return text.substr(0, 130).slice(0, -3) + '...';
  };

  useEffect(() => {
    const text = descriptions;
    if (showLess) setTextToShow(text);
    else setTextToShow(showMoreText(text));
  }, [showLess, descriptions]);

  const resolve = (showLess) => {
    setShowLess(showLess);
  };

  return (
    <Paper className={classes.container}>
      <Box display="flex" flexDirection="column" position="relative">
        <Typography className={classes.charge}>{charge}</Typography>
        <Typography className={classes.date}>{date}</Typography>
        <Typography className={classes.textDescription}>
          {textToShow}
        </Typography>
      </Box>
      {textToShow.length > 99 && (
        <Box marginTop={1}>
          <ShowMore resolve={resolve} />
        </Box>
      )}
    </Paper>
  );
};

JobDescription.propTypes = {
  charge: PropTypes.string,
  date: PropTypes.string,
  descriptions: PropTypes.string,
};

export default JobDescription;
