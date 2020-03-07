import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './navbar.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    borderBottom: '4px groove rgb(51, 173, 255)',
    width: '100vw',
  },
  app: {
    background: '#336699',
    color: '#336699',
    height: 75,
  },
  menuButton: {
    marginTop: '10px',
    marginRight: theme.spacing(2),
    align: 'auto',
  },
  title: {
    flexGrow: 1,
    paddingTop: 20,
    fontFamily: [
      'fantasy',
      'sans-serif',
    ],
    align: 'auto',
    '&:hover': {
      cursor: 'pointer',
    },
    fontSize: '2.6em' ,
    color: '#336699',
    textDecoration  : 'none',
    border: '1px black',
  },
}));

function Navbar(props) {
  const classes = useStyles();

  function handleClick(e) {
    e.preventDefault();
    window.location = `/activity/new`;
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.app} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div>
            <a className="homeLink" href="/">Navigator</a>
          </div>
          <div className="toolbarButton">
            <button className="addButton" onClick={handleClick}>Add Activity</button>
            {/* <Button className={classes.addButton} onClick={handleClick}>Add Activity</Button> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;