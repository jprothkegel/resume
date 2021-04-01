import { makeStyles } from '@material-ui/core/styles';

export const useAboutMeStyles = makeStyles(() => ({
  image: {
    height: 363,
    width: 363,
    objectFit: 'cover',
    marginRight: 40,
    borderRadius: 40
  },
  title: {
    fontSize: 16,
    color: '#AAAAAA',
  },
  name: {
    fontSize: 48,
    fontWeight: 600,
    fontFamily: 'Poppins'
  },
  description: {
    fontSize: 14,
  },
}));
