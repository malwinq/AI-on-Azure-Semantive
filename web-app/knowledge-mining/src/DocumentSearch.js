import React, { Component } from 'react';
import './DocumentSearch.css';
import DocumentCardPanel from './DocumentCardPanel';
import TextField from '@material-ui/core/TextField';
 
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
 
  render () { 
    return (
        <div>
            <form noValidate autoComplete="off">
              <TextField id="outline-basic" className="document-search"
                label="Search for documents" 
                variant="outlined" 
                onChange={this.handleChange}
              />
            </form>
            {this.state.input && <DocumentCards input={this.state.input}/>}
        </div>
    )
  }
}

export default DocumentSearch;