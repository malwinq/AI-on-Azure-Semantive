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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './DocumentCard.css';

const styles = {
  root: {
    width: 350,
    marginTop: 20,
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
}

class DocumentCard extends Component {
  state = {
      expanded: false
  }

  handleExpandClick = () => {
    const expand = this.state.expanded;
    this.setState({ expanded: !expand });
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
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
            subheader={date}
          />
          {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          /> */}
          <CardContent>
            <Typography variant="body2" component="p">
              Keywords: {keywords.map((word) => (<li>{word}</li>))}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button size="small" color="primary">
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
            </CardContent>
          </Collapse>
        </Card>
      );
  }
}

export default withStyles(styles)(DocumentCard);