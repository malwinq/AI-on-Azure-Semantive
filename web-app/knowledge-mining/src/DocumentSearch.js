import React, { Component } from 'react';
// import { getKeywords, getOptions } from './functions';
import './DocumentSearch.css';
import DocumentCard from './DocumentCard';
import TextField from '@material-ui/core/TextField';
 
class DocumentSearch extends Component {
  state = {
      options: null,
      document: null,
      keywords: null
  };

  componentDidMount() {
    // tbd
  }

  handleChange = (event) => {
      console.log(event.target.value);
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
            {this.state.document && <DocumentCard documentName={this.state.document} keywords={this.state.keywords}/>}
        </div>
    )
  }
}

export default DocumentSearch;