import React, { Component } from 'react';
import { Card, CardHeader, CardContent, CardActions, Collapse, Avatar,
  IconButton, Typography, Button } from '@material-ui/core';
import { getFile } from './functions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import TranslateIcon from '@material-ui/icons/Translate';
import PublicIcon from '@material-ui/icons/Public';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PersonIcon from '@material-ui/icons/Person';
import Chip from '@material-ui/core/Chip';
import DescriptionIcon from '@material-ui/icons/Description';

const styles = {
  root: {
    borderStyle: 'solid',
    borderColor: '#1b19b6',
    width: 350,
    minHeight: '25vw',
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 30,
    display: 'inline-block',
    verticalAlign: 'top',
    position: 'relative'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    position: 'absolute',
    bottom: '18px',
    right: '20px',
    paddingTop: '10px'
  },
  expandOpen: {
    transform: 'rotate(0deg)',
  },
  avatar: {
    backgroundColor: '#1b19b6',
    fontSize: 12,
  },
  bullet: {
    textAlign: 'left'
  },
  download: {
    position: 'absolute',
    bottom: '20px',
    paddingTop: '10px'
  },
  collapse: {
    paddingBottom: '20px'
  }
}

class DocumentCard extends Component {
  state = {
      expanded: false,
      expandedKeyphrases: false
  }

  handleExpandClick = () => {
    const expand = this.state.expanded;
    this.setState({ expanded: !expand });
  };

  handleExpandKeyphrasesClick = () => {
    const expand = this.state.expandedKeyphrases;
    this.setState({ expandedKeyphrases: !expand });
  };

  downloadFile = (fileURL, fileName) => {
    getFile(fileURL).then((file) => {
      const blob = new Blob([file], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })
  };

  getAvatarTitle = (name) => {
    return name.split('.')[name.split('.').length-2].substring(0,2).toUpperCase();
  };

  render() {
    const expanded = this.state.expanded;
    const expandedKeyphrases = this.state.expandedKeyphrases;
    const { classes } = this.props;
    const { keyphrases, metadata_storage_path,
        metadata_storage_name, metadata_storage_file_extension,
        metadata_storage_last_modified, locations,
        organizations, people, metadata_language } = this.props.data;
    return (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {this.getAvatarTitle(metadata_storage_name)}
              </Avatar>
            }
            title={<Chip
              icon={<DescriptionIcon />}
              label={metadata_storage_name.split('.')[metadata_storage_name.split('.').length-2]}
              color="primary"
              variant="outlined"
            />}
            subheader={new Date(metadata_storage_last_modified).toLocaleDateString()}
          />
          <CardContent>
            <Typography variant="body2" component="p">
              <b>{`Keywords `}</b>
              <Badge badgeContent={keyphrases.length} color="primary" max={999}>
                <KeyboardIcon/>
              </Badge> 
              <ul className={classes.bullet}>
              {keyphrases.slice(0, 10).map((word, _) => (
                <li>{word}</li>))}
              </ul>
            </Typography>
            <Collapse in={expandedKeyphrases} timeout="auto" unmountOnExit>
              <Typography variant="body2">
                <ul className={classes.keyphrases}>
                {keyphrases.slice(10, keyphrases.length < 40 ? keyphrases.length : 40).map((word, index) => (
                  <li>{keyphrases.slice(20, keyphrases.length).length-1 !== index ? word + ',' : word} </li>))}
                </ul>
              </Typography>
            </Collapse>
            <IconButton
              className={classes.expandOpen}
              onClick={this.handleExpandKeyphrasesClick}
              aria-expanded={expandedKeyphrases}
              aria-label="show more">
                  { expandedKeyphrases ? (<ExpandLessIcon/>) : (<ExpandMoreIcon/>) }
            </IconButton>
          </CardContent>
          <CardActions disableSpacing>
            <Button className={classes.download} size="small" color="primary" 
              onClick={() => this.downloadFile(atob(metadata_storage_path), metadata_storage_name)}>
              Download
            </Button>
            <IconButton
              className={classes.expand} 
              onClick={this.handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              { expanded ? (<ExpandLessIcon/>) : (<ExpandMoreIcon/>) }
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit className={classes.collapse}>
            <CardContent>
              <Typography paragraph variant="subtitle2">
                <b>{`Data type `}</b>
                <Badge badgeContent={1} color="primary">
                  <AssignmentIcon/>
                </Badge>
                <div>{metadata_storage_file_extension === '.pdf' ? 'PDF' : metadata_storage_file_extension}</div>
              </Typography>
              <Typography paragraph variant="subtitle2">
                <b>{`Language `}</b>
                <Badge badgeContent={1} color="primary">
                  <TranslateIcon/>
                </Badge>
                <div>{metadata_language === 'en' ? 'English' : metadata_language}</div>
              </Typography>
              { locations.length > 0 ? <Typography paragraph variant="subtitle2">
                  <b>{`Locations `}</b>
                  <Badge badgeContent={locations.length} color="primary">
                    <PublicIcon/>
                  </Badge>
                </Typography> : null }
              { locations.length > 0 ?
                  <Typography paragraph variant="body2">
                    {locations.map((location, index) => {
                      return locations.length-1 !== index ? location + ', ' : location
                    })}
                  </Typography> : null
              }
              { organizations.length > 0 ? <Typography paragraph variant="subtitle2">
                <b>{`Organizations `}</b>
                <Badge badgeContent={organizations.length} color="primary">
                  <AccountBalanceIcon/>
                </Badge>
              </Typography> : null }
              { organizations.length > 0 ?
                  <Typography paragraph variant="body2">
                    {organizations.map((organization, index) => {
                      return organizations.length-1 !== index ? organization + ', ' : organization
                    })}
                  </Typography> : null
              }
              { people.length > 0 ? <Typography paragraph variant="subtitle2">
                <b>{`People `}</b>
                <Badge badgeContent={people.length} color="primary">
                  <PersonIcon/>
                </Badge>
              </Typography>: null }
              { people.length > 0 ?
                  <Typography paragraph variant="body2">
                    {people.map((person, index) => {
                      return people.length-1 !== index ? person + ', ' : person
                    })}
                  </Typography> : null
              }
            </CardContent>
          </Collapse>
        </Card>
      );
  }
}

export default withStyles(styles)(DocumentCard);