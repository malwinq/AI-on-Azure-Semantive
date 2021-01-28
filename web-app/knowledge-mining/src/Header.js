import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, Menu, MenuItem, ListItemIcon, ListItemText, 
    Button, Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import SendIcon from '@material-ui/icons/Send';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import AuthenticationButton from './authentication-button';

const styles = {
  navBar: {
    backgroundColor: '#1b19b6'
  },
  menuButton: {
    position: 'absolute',
    top: '1.5%',
    right: '1%',
    backgroundColor: '#ffffff',
    color: '#1b19b6'
  },
  loginButton: {
    position: 'absolute',
    top: '1.5%',
    right: '4%',
    backgroundColor: '#ffffff',
    color: '#1b19b6'
  }
}

class Header extends Component {
    state = {
        menuOpen: false,
        anchorEl: null,
        modalInfoOpen: false,
        modalHelpOpen: false,
        modalFeedbackOpen: false
    }

    openMenu = (event) => {
        this.setState({ menuOpen: true, anchorEl: event.currentTarget });
    }

    closeMenu = () => {
        this.setState({ menuOpen: false });
    }

    showInfo = () => {
        this.setState({ modalInfoOpen: true });
    }

    showHelp = () => {
        this.setState({ modalHelpOpen: true });
    }

    sendFeedback = () => {
        this.setState({ modalFeedbackOpen: true });
    }

    closeInfo = () => {
        this.setState({ modalInfoOpen: false });
    }

    closeHelp = () => {
        this.setState({ modalHelpOpen: false });
    }

    closeFeedback = () => {
        this.setState({ modalFeedbackOpen: false });
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
                    <AuthenticationButton className={classes.loginButton}/>
                </AppBar>
                <Dialog
                    open={this.state.modalHelpOpen}
                    onClose={this.closeHelp}
                >
                    <DialogTitle>Help</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            This application aims to search for custom properties of unstructured documents. Try to type keywords
                            or document name or type of document and then the results should be displayed. You can view the detailed
                            info by clicking expand button and download the document by clicking 'Download'.
                        </DialogContentText>
                </DialogContent>
                </Dialog>
                <Dialog
                    open={this.state.modalInfoOpen}
                    onClose={this.closeInfo}
                >
                    <DialogTitle>Info</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            This application aims to search for custom properties of unstructured documents. It's a project made by Warsaw
                            University of Technology students with cooperation with Semantive company for subject AI on Azure.
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
                <Dialog
                    open={this.state.modalFeedbackOpen}
                    onClose={this.closeFeedback}
                >
                    <DialogTitle>Feedback</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            You can contact us by email: malwina.kubas@gmail.com. We will appreciate any feedback, thank you!
                        </DialogContentText>
                </DialogContent>
                </Dialog>
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