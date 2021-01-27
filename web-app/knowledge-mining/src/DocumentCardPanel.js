import React, { Component } from 'react';
import DocumentCard from './DocumentCard';
import { getDocuments } from './functions';
import ClipLoader from 'react-spinners/ClipLoader';

class DocumentCardPanel extends Component {
  state = {
    data: null,
    filterKeywordsExpanded: false,
    isLoaded: true,
    filters: {
      keywords: [],
    }
  };

  componentDidMount() {
    this.fetchDocumentsData();
  };

  componentWillReceiveProps() {
    this.fetchDocumentsData();
  };

  fetchDocumentsData = () => {
    this.setState({ isLoaded: false });
    getDocuments(this.props.input).then(
      (res) => {
        this.setState({ data: res.data.value, isLoaded: true });
      },
      (err) => {
        console.log(err);
      });
  };
 
  render () { 
    const { data, isLoaded } = this.state;
    let result;
    if (!isLoaded) {
      result = (<div style={{padding: '50px'}}>
        <ClipLoader
          size={70}
          color={"#1b19b6"}
          style={{padding: '10%'}}
      /></div>);
    } else if (data && data.length === 0) {
      result = (<div style={{padding: '40px', fontSize: '18px'}}>
          Given phrase doesn't match any documents
        </div>);
    } else if (data) {
      result = (<div>{data.map((document) =>
        <DocumentCard key={document.metadata_storage_path} data={document}/>)}</div>
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