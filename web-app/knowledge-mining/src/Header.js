import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    marginTop: '5%',
    justifyContent: 'center',
    color: '#1b19b6',
    marginLeft: 'auto',
    marginBottom: '3%'
  },
}

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
        <Typography variant="h4" className={classes.root}>
            Knowledge Mining Browser
        </Typography>
      );
  }
}

export default withStyles(styles)(Header);