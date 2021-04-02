import { makeStyles } from '@material-ui/core/styles';

export const useAboutMeStyles = makeStyles(() => ({
  image: {
    height: (props) => (props.mobile ? 300 : 363),
    width: (props) => (props.mobile ? 300 : 363),
    objectFit: 'cover',
    marginRight: (props) => (props.mobile ? null : 40),
    borderRadius: 40,
    margin: (props) => (props.mobile ? '0px auto 20px' : null),
    objectPosition: '100% 5%'
  },
  title: {
    fontSize: 16,
    color: '#AAAAAA',
    textAlign: (props) => (props.mobile ? 'center' : ''),
  },
  name: {
    fontSize: (props) => (props.mobile ? 24 : 48),
    fontWeight: 600,
    textAlign: (props) => (props.mobile ? 'center' : ''),
  },
  description: {
    fontSize: 14,
    textAlign: (props) => (props.mobile ? 'center' : ''),
  },
}));
