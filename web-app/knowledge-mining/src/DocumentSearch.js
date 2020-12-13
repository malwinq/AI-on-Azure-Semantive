import React, { Component } from 'react';
import Select from 'react-select';
import { getKeywords, getOptions } from './functions';
import './DocumentSearch.css';
import DocumentCard from './DocumentCard';
 
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
            <div className="document-search">
                <Select 
                    options={this.state.options} 
                    name="documents" 
                    placeholder="Choose your language"
                    onChange={this.handleChange} 
                />
            </div>
            {this.state.document && <DocumentCard documentName={this.state.document} keywords={this.state.keywords}/>}
        </div>
    )
  }
}

export default DocumentSearch;