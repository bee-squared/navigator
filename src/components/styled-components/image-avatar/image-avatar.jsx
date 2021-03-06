import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  size: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  '@media (max-width: 400px)': {
    size: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  },
}));

export default function ImageAvatar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar id="userAvatar" alt="avatar" src={props.url} className={classes.size}/>
    </div>
  );
}