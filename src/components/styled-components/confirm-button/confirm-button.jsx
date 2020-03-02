import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import propTypes from 'prop-types';

const BootstrapButton = withStyles({
  root: {
    minWidth: '100px',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    color: 'white',
    backgroundColor: '#3C77B2',
    borderColor: '##3C77B2',
    fontFamily: [
      'interstate',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#336699',
      borderColor: '#336699',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#C0C0C5',
      borderColor: '#C0C0C5',
    },
  },
})(Button);


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ConfirmButton(props) {
  const classes = useStyles();

  return (
    <div>
      <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
        {props.name}
      </BootstrapButton>
    </div>
  );
}

ConfirmButton.propTypes = {
  name: propTypes.string.isRequired,
}