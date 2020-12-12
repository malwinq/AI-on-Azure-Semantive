import SelectSearch from 'react-select-search';
import React, { Component } from 'react';
// import './DocumentSearch.css';s
 
class DocumentSearch extends Component {
 
  HiItems(items) {
    console.log(items)
  }

  handleChange = (event) => {
      console.log(event);
  }
 
  render () {
    const options = [
        {name: 'Swedish', value: 'sv'},
        {name: 'English', value: 'en'},
        {
            type: 'group',
            name: 'Group name',
            items: [
                {name: 'Spanish', value: 'es'},
            ]
        },
    ];
 
    return (
        <div>
            <SelectSearch 
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