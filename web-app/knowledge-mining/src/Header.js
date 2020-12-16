import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'cursive',
    ].join(','),
  },});

const styles = {
  root: {
    marginTop: '5%',
    justifyContent: 'center',
    color: '#1b19b6',
    marginLeft: 'auto',
    marginBottom: '3%'
  },
  navBar: {
    backgroundColor: '#1b19b6'
  }
}

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
        <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Knowledge Mining Browser
          </Typography>
        </Toolbar>
      </AppBar>
        <ThemeProvider theme={theme}>
            <Typography variant="h5" className={classes.root}>
                
            </Typography>
        </ThemeProvider>
        </div>
      );
  }
}

export default withStyles(styles)(Header);