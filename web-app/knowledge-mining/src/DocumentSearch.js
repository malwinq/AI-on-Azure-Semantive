import React, { Component } from 'react';
import DocumentCardPanel from './DocumentCardPanel';
import TextField from '@material-ui/core/TextField';
import debounce from 'lodash.debounce';
import { withStyles } from '@material-ui/core/styles';
 
const styles = {
  search: {
    width: '60%',
    fontSize: '14px',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center'
  }
}

class DocumentSearch extends Component {
  state = {
      input: null
  };

  handleChange = (event) => {
      console.log(event.target.value);
      this.setState({ input: event.target.value });
  }

  debouncedSave = debounce((event) => this.handleChange(event), 400);
 
  render () { 
    const { classes } = this.props;
    return (
        <div>
            <form noValidate autoComplete="off">
              <TextField id="outline-basic" className={classes.search}
                label="Search for documents" 
                variant="outlined" 
                onChange={this.debouncedSave}
              />
            </form>
            {this.state.input && <DocumentCardPanel input={this.state.input}/>}
        </div>
    )
  }
}

export default withStyles(styles)(DocumentSearch);