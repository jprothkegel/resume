import { makeStyles } from '@material-ui/core/styles';

export const useLayoutStyles = makeStyles(() => ({
  container: {
    margin: '50px auto',
    borderRadius: 40,
    maxWidth: '1320px',
    height: 500,
    padding: 50,
  },
}));

export const useNavBarStyles = makeStyles(() => ({
  image: {
    height: 44,
    width: 44,
    borderRadius: '50%',
    backgroundColor: 'black',
    position: 'relative',
    marginRight: 15
  },
  typo: {
    color: 'white',
    margin: '0 auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));
