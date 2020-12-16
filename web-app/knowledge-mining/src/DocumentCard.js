import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: 350,
    marginTop: 40,
    marginLeft: 10,
    display: 'inline-block',
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
    backgroundColor: '#1f03bdb4',
    fontSize: 12,
  },
  keywords: {
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

  downloadFile = (location) => {
    // todo
    console.log(location);
  };

  render() {
    const expanded = this.state.expanded;
    const { classes } = this.props;
    const { title, keywords, location, date, institution, header, type } = this.props.data;
    return (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {institution}
              </Avatar>
            }
            title={title}
            subheader={date}
          />
          <CardContent>
            <Typography variant="body2" component="p">
              Keywords: {keywords.map((word) => (<div className={classes.keywords}>{word}</div>))}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button size="small" color="primary" onClick={() => this.downloadFile(location)}>
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
              <Typography paragraph variant="subtitle2">Header:</Typography>
              <Typography paragraph variant="body2">
                {header}
              </Typography>
              <Typography paragraph variant="subtitle2">Typ danych: {type}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      );
  }
}

export default withStyles(styles)(DocumentCard);