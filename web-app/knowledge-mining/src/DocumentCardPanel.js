import React, { Component } from 'react';
import DocumentCard from './DocumentCard';
import { getDocuments } from './functions';
import ClipLoader from 'react-spinners/ClipLoader';
import './DocumentCardPanel.css';
 
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
  }

  componentWillReceiveProps() {
    console.log('props');
    this.fetchDocumentsData();
  }

  fetchDocumentsData = () => {
    const documents = getDocuments(this.props.input);
    console.log('ty');
    this.setState({ data: documents });
  }
 
  render () { 
    const data = this.state.data;
    let result;
    if (data) {

    } else {
      result = (<div className="loading-icon">
      <ClipLoader
        size={70}
        color={"#1f03bdb"}
    /></div>);
    }
    return (
        <div>
            {result}
        </div>
    )
  }
}

export default DocumentCardPanel;