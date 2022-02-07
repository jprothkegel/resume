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
    textDecoration: 'none',
  },
  image: {
    height: 20,
    width: 'auto',
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 20,
    padding: '10px 16px',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  container: {
    marginTop: 20,
    marginBottom: 20,
    padding: '10px 16px',
    borderRadius: 10
  },
  li: {
    textAlign: 'justify',
  },
  textDescription: {
    marginTop: 16,
    fontSize: 13,
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
  },
  fabSection: {
    position: 'absolute',
    bottom: 0,
    backgroundImage:
      'linear-gradient(to bottom, rgba(255,255,255,0), 10%, rgba(255,255,255,1))',
    width: '100%',
  },
  fabButton: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: "#00aaad !important"
  },
}));
