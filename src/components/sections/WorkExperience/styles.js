import { makeStyles } from '@material-ui/core';

export const useJobStyles = makeStyles(() => ({
  date: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  title: {
    fontSize: 18,
  },
  charge: {
    fontSize: 14,
    marginBottom: 10,
  },
  link: {
    color: 'black',
  },
  image: {
    height: 20,
    width: 'auto',
    marginRight: 10,
  },
  container: {
    marginTop: 20,
    marginBottom: 20,
    padding: '10px 16px',
  },
}));
