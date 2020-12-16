import React, { Component } from 'react';
import { getKeywords, getOptions } from './functions';
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
    const documentObjects = getOptions();
    this.setState({ options: documentObjects });
  }

  handleChange = (event) => {
      console.log(event);
      const docName = event.value;
      this.setState({ document: docName });
      const docKeywords = getKeywords(event.value);
      this.setState({ keywords: docKeywords });
  }
 
  render () { 
    return (
        <div>
            <form noValidate autoComplete="off" className="document-search">
              <TextField id="outline-basic" label="Search for documents" variant="outlined"/>
            </form>
            {this.state.document && <DocumentCard documentName={this.state.document} keywords={this.state.keywords}/>}
        </div>
    )
  }
}

export default DocumentSearch;