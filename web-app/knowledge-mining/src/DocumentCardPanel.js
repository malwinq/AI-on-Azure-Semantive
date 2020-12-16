import React, { Component } from 'react';
import DocumentCard from './DocumentCard';
import { getDocuments } from './functions';
 
class DocumentCardPanel extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    console.log('mount');
    this.fetchDocumentsData();
  }

  componentDidUpdate() {
    console.log('update');
    // this.fetchDocumentsData();
  }

  fetchDocumentsData() {
    const documents = getDocuments(this.props.input);
    console.log('ty');
    this.setState({ data: documents });
  }
 
  render () { 
    // let CardList = 
    return (
        <div>
            {/* {this.state.data} */}
        </div>
    )
  }
}

export default DocumentCardPanel;