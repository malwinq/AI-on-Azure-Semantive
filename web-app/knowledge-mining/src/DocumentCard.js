import React, { Component } from 'react';
import { Card, CardHeader, CardContent, CardActions, Collapse, Avatar,
  IconButton, Typography, Button } from '@material-ui/core';
import { getFile } from './functions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    borderStyle: 'solid',
    borderColor: '#1b19b6',
    width: 350,
    minHeight: '22vw',
    marginTop: 40,
    marginLeft: 10,
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
    right: '20px'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#1b19b6',
    fontSize: 12,
  },
  keyphrases: {
    display: 'inline-block',
    marginLeft: 7,
  },
  download: {
    position: 'absolute',
    bottom: '20px'
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
            title={metadata_storage_name.split('.')[metadata_storage_name.split('.').length-2]}
            subheader={new Date(metadata_storage_last_modified).toLocaleDateString()}
          />
          <CardContent>
            <Typography variant="body2" component="p">
              Keywords: {keyphrases.slice(0, 10).map((word, index) => (
                <div className={classes.keyphrases}>{keyphrases.slice(0, 20).length-1 !== index ? word + ',' : word} </div>))}
            </Typography>
            <Collapse in={expandedKeyphrases} timeout="auto" unmountOnExit>
              <Typography variant="body2" component="p">
                {keyphrases.slice(10, keyphrases.length < 40 ? keyphrases.length : 40).map((word, index) => (
                <div className={classes.keyphrases}>{keyphrases.slice(20, keyphrases.length).length-1 !== index ? word + ',' : word} </div>))}
              </Typography>
            </Collapse>
            <IconButton
              // className={classes.expand}
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
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="subtitle2">Data type: {metadata_storage_file_extension}</Typography>
              <Typography paragraph variant="subtitle2">Language: {metadata_language}</Typography>
              { locations.length > 0 ? <Typography paragraph variant="subtitle2">Locations:</Typography> : null }
              { locations.length > 0 ?
                  <Typography paragraph variant="body2">
                    {locations.map((location, index) => {
                      return locations.length-1 !== index ? location + ', ' : location
                    })}
                  </Typography> : null
              }
              { organizations.length > 0 ? <Typography paragraph variant="subtitle2">Organizations:</Typography> : null }
              { organizations.length > 0 ?
                  <Typography paragraph variant="body2">
                    {organizations.map((organization, index) => {
                      return organizations.length-1 !== index ? organization + ', ' : organization
                    })}
                  </Typography> : null
              }
              { people.length > 0 ? <Typography paragraph variant="subtitle2">People:</Typography>: null }
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