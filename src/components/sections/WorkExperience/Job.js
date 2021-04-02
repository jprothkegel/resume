import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useJobStyles } from './styles';

const Job = ({ ...props }) => {
  const {
    title,
    charge,
    date,
    index,
    descriptions,
    link,
    mobile,
    image,
  } = props;
  const classes = useJobStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    if (index === 0) setExpanded('panel1');
  }, [index]);

  return (
    <Box width={mobile ? '100%' : '50%'} marginTop="20px" marginBottom="20px">
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary expandIcon={<FontAwesomeIcon icon={faChevronDown} />}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            <Box display="flex" alignItems="center">
              <img className={classes.image} src={image} />
              <Typography className={classes.title}>{title}</Typography>
            </Box>
          </a>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column">
            <Typography className={classes.charge}>{charge}</Typography>
            <Typography className={classes.date}>{date}</Typography>
            <ul>
              {descriptions.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

Job.propTypes = {
  title: PropTypes.string,
  charge: PropTypes.string,
  date: PropTypes.string,
  index: PropTypes.number,
  descriptions: PropTypes.array,
  link: PropTypes.string,
  mobile: PropTypes.bool,
  image: PropTypes.string,
};

export default Job;
