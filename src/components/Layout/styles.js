import { makeStyles } from '@material-ui/core/styles';

export const useLayoutStyles = makeStyles(() => ({
  container: {
    margin: (props) => (props.mobile ? 0 : '50px auto'),
    borderRadius: (props) => (props.mobile ? 0 : 40),
    maxWidth: (props) => (props.mobile ? '100%' : '1320px'),
    padding: (props) => (props.mobile ? 20 : '50px 50px 20px 50px'),
  },
}));

export const useNavBarStyles = makeStyles(() => ({
  image: {
    height: 44,
    width: 44,
    borderRadius: '50%',
    backgroundColor: 'black',
    position: 'relative',
    marginRight: 15,
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
