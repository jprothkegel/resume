import { makeStyles } from '@material-ui/core/styles';

export const useLanguageCircleStyles = makeStyles(() => ({
  bottom: {
    color: '#00aaad',
  },
  image: {
    height: 100,
    width: 100,
    objectFit: 'cover',
    borderRadius: '50%',
  },
}));
