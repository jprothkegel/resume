import { makeStyles } from '@material-ui/core/styles';

export const useUniversityCardStyles = makeStyles(() => ({
  title: {
    fontSize: 21,
    fontWeight: 600,
  },
  dateAndPlace: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  link: {
    color: 'black',
  },
  container: {
    width: '100%',
  },
  card: {
    borderRadius: 10
  }
}));
