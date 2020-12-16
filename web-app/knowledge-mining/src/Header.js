import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

const styles = {
  navBar: {
    backgroundColor: '#1b19b6'
  },
  menuButton: {
    position: 'absolute',
    bottom: '3%',
    left: '1%'
  }
}
  
// const StyledMenuItem = withStyles((theme) => ({
//     root: {
//       '&:focus': {
//         backgroundColor: theme.palette.primary.main,
//         '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//           color: theme.palette.common.white,
//         },
//       },
//     },
//   }))(MenuItem);

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

    getInfo = () => {

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
                    >Open Menu
                </Button>
                <Menu
                    id="customized-menu"
                    open={this.state.menuOpen}
                    onClose={this.closeMenu}
                    anchorEl={this.state.anchorEl}
                    keepMounted={true}
                >
                    <MenuItem>
                        <ListItemIcon>
                            <SendIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Sent mail" />
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <DraftsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <InboxIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </MenuItem>
            </Menu>
        </div>
        );
    }
}

export default withStyles(styles)(Header);