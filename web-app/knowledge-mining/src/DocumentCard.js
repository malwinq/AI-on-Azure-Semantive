import React, { Component } from 'react';
import { Card, CardHeader, CardContent, CardActions, Collapse, Avatar,
  IconButton, Typography, Button } from '@material-ui/core';
import { getFile } from './functions';
// import CardMedia from '@material-ui/core/CardMedia';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    borderStyle: 'solid',
    borderColor: '#1b19b6',
    width: 350,
    marginTop: 40,
    marginLeft: 10,
    display: 'inline-block',
    verticalAlign: 'top'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
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
  }
}

class DocumentCard extends Component {
  state = {
      expanded: false
  }

  handleExpandClick = () => {
    const expand = this.state.expanded;
    this.setState({ expanded: !expand });
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

  render() {
    const expanded = this.state.expanded;
    const { classes } = this.props;
    const { title, keyphrases, metadata_storage_path,
        metadata_storage_name, metadata_storage_file_extension,
        metadata_storage_last_modified, locations,
        organizations, people, metadata_language } = this.props.data;
    return (
        <Card className={classes.root}>
          <CardHeader
            // avatar={
            //   <Avatar aria-label="recipe" className={classes.avatar}>
            //     {institution}
            //   </Avatar>
            // }
            title={metadata_storage_name.split('.')[metadata_storage_name.split('.').length-2]}
            subheader={new Date(metadata_storage_last_modified).toLocaleDateString()}
          />
          <CardContent>
            <Typography variant="body2" component="p">
              Keywords: {keyphrases.map((word, index) => (
                <div className={classes.keyphrases}>{keyphrases.length-1 !== index ? word + ',' : word} </div>))}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button size="small" color="primary" onClick={() => this.downloadFile(atob(metadata_storage_path), metadata_storage_name)}>
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