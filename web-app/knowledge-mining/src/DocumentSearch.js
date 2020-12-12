import React, { Component } from 'react';
import Select from 'react-select';
import './DocumentSearch.css';
 
class DocumentSearch extends Component {
 
  HiItems(items) {
    console.log(items)
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