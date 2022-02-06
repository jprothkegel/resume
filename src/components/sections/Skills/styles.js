import { makeStyles } from '@material-ui/core/styles';

export const useSkillsStyles = makeStyles(() => ({
  container: {
    '& :not(:last-child)': {
      marginRight: 10,
      marginBottom: 10,
    },
  },
}));

export const useSkillContainerStyles = makeStyles(() => ({
  container: {
    padding: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 10
  },
  icon: {
    color: '#666666'
  },
  chip: {
    marginTop: 10,
    marginRight: 10,
  }
}));
