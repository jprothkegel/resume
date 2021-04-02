import { makeStyles } from '@material-ui/core/styles';

export const useUniversityCardStyles = makeStyles(() => ({
  card: {
    maxWidth: (props) => (props.mobile ? '100%' : '50%'),
    marginTop: 20,
    marginBottom: 30,
  },
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
}));
