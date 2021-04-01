import { makeStyles } from '@material-ui/core/styles';

export const useSkillsStyles = makeStyles(() => ({
  container: {
    '& :not(:last-child)': {
      marginRight: 10,
      marginBottom: 10,
    },
  },
}));
