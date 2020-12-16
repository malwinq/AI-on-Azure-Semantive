import React, { Component } from 'react';
import DocumentCard from './DocumentCard';
import { getDocuments } from './functions';
import ClipLoader from 'react-spinners/ClipLoader';
 
class DocumentCardPanel extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.fetchDocumentsData();
  }

  componentWillReceiveProps() {
    this.fetchDocumentsData();
  }

  fetchDocumentsData = () => {
    this.setState({ isLoaded: false });
    const documents = getDocuments(this.props.input);
    this.setState({ data: documents, isLoaded: true });
  }
 
  render () { 
    const { data, isLoaded } = this.state;
    let result;
    if (!isLoaded) {
      result = (<div className="loading-icon">
        <ClipLoader
          size={70}
          color={"#1b19b6"}
          style={{padding: '10%'}}
      /></div>);
    } else if (!data) {
      result = (<div style={{padding: '50px', fontSize: '18px'}}>
          Nie znaleziono pasujących dokumentów
        </div>);
    } else {
      result = (<div>{data.map((document) => 
        <DocumentCard key={document.location} data={document}/>)}</div>
      );
    }
    return (
        <div>
            {result}
        </div>
    )
  }
}

export default DocumentCardPanel;