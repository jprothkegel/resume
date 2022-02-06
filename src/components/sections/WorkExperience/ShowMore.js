import React, { useEffect, useState } from 'react';
import { Fab, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useJobStyles } from './styles';

const ShowMore = ({ ...props }) => {
  const { resolve } = props;
  const [showLess, setShowLess] = useState(false);

  useEffect(() => {
    resolve(showLess);
  }, [showLess])

  const classes = useJobStyles();
  return (
    <Fab
      className={classes.fabButton}
      size="small"
      onClick={() => setShowLess(!showLess)}
    >
      <FontAwesomeIcon icon={showLess ? faArrowUp : faArrowDown} color="white" />
    </Fab>
  );
};

ShowMore.propTypes = {
  resolve: PropTypes.func,
};

export default ShowMore;
