import React, { Component } from 'react';
import Select from 'react-select';
import { getOptions } from 'functions';
import './DocumentSearch.css';
 
class DocumentSearch extends Component {
  state = {
      options: null
  };

  componentDidMount() {
    const documentObjects = getOptions();
    this.setState({ options: documentObjects });
  }

  handleChange = (event) => {
      console.log(event);
  }
 
  render () {
    const options = [
        {label: 'Swedish', value: 'sv'},
        {label: 'English', value: 'en'}
    ];
 
    return (
        <div className="document-search">
            <Select 
                options={options} 
                // name="language" 
                placeholder="Choose your language"
                onChange={this.handleChange} 
            />
        </div>
    )
  }
}

export default DocumentSearch;