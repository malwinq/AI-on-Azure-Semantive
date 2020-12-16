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
    this.setState({ isLoaded: false });
    const documents = getDocuments(this.props.input);
    console.log('ty');
    this.setState({ data: documents });
    this.setState({ isLoaded: true });
  }
 
  render () { 
    const { data, isLoaded } = this.state;
    let result;
    if (!isLoaded) {
      result = (<div className="loading-icon">
        <ClipLoader
          size={70}
          color={"#1f03bdb"}
      /></div>);
    } else if (!data) {
      result = (<div>Nie znaleziono pasujących dokumentów</div>);
    } else {
      result = data.map((document) => <DocumentCard></DocumentCard>);
    }
    return (
        <div>
            {result}
        </div>
    )
  }
}

export default DocumentCardPanel;