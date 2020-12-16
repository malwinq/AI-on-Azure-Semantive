import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, Menu, MenuItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import SendIcon from '@material-ui/icons/Send';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

const styles = {
  navBar: {
    backgroundColor: '#1b19b6'
  },
  menuButton: {
    position: 'absolute',
    bottom: '3%',
    left: '1%',
    backgroundColor: '#1b19b6'
  }
}

class Header extends Component {
    state = {
        menuOpen: false,
        anchorEl: null
    }

    openMenu = (event) => {
        this.setState({ menuOpen: true, anchorEl: event.currentTarget });
    }

    closeMenu = () => {
        this.setState({ menuOpen: false });
    }

    showInfo = () => {
        
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static" className={classes.navBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Knowledge Mining Browser
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Button
                    className={classes.menuButton}
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={this.openMenu}
                    >
                        <MoreVertOutlinedIcon/>
                </Button>
                <Menu
                    id="customized-menu"
                    open={this.state.menuOpen}
                    onClose={this.closeMenu}
                    anchorEl={this.state.anchorEl}
                    keepMounted={true}
                >
                    <MenuItem onClick={this.showHelp}>
                        <ListItemIcon>
                            <HelpIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Help" />
                    </MenuItem>
                    <MenuItem onClick={this.sendFeedback}>
                        <ListItemIcon>
                            <SendIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Send feedback" />
                    </MenuItem>
                    <MenuItem onClick={this.showInfo}>
                        <ListItemIcon>
                            <InfoIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Info" />
                    </MenuItem>
            </Menu>
        </div>
        );
    }
}

export default withStyles(styles)(Header);