import React, { Component } from 'react';
import './DocumentSearch.css';
import DocumentCardPanel from './DocumentCardPanel';
import TextField from '@material-ui/core/TextField';
import debounce from 'lodash.debounce';
 
class DocumentSearch extends Component {
  state = {
      input: null
  };

  componentDidMount() {
    // tbd
  }

  handleChange = (event) => {
      console.log(event.target.value);
      this.setState({ input: event.target.value });
  }

  debouncedSave = debounce((event) => this.handleChange(event), 400);
 
  render () { 
    return (
        <div>
            <form noValidate autoComplete="off">
              <TextField id="outline-basic" className="document-search"
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

export default DocumentSearch;