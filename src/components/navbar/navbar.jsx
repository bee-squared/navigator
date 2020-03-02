import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import * as Colors from '@material-ui/core/colors';
import './navbar.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    borderBottom: '4px groove rgb(51, 173, 255)',
    width: '100vw',
  },
  app: {
    background: 'lightgrey',
    color: '#336699',
    height: 75,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    align: 'auto',
  },
  title: {
    flexGrow: 1,
    paddingTop: 10,
    fontFamily: [
      'fantasy',
      'sans-serif',
    ],
    align: 'auto',
  },
  addButton: {
    color: '#ffffff',
    backgroundColor: '#336699',
    '&:hover': {
      backgroundColor: '#336699',
      borderColor: '#0062cc',
      boxShadow: 'none',
      opacity: .8,
      color: '#ffffff',
    },
  },
}));

function Navbar(props) {
  const classes = useStyles();

  function handleClick(e) {
    e.preventDefault();
    window.location = "/activity/new";
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.app} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" className={classes.title} >
            Navigator
          </Typography>
          <Button className={classes.addButton} onClick={handleClick}>Add Activity</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;