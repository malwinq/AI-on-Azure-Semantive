import React, { Component } from 'react';
import DocumentCard from './DocumentCard';
import { getDocuments } from './functions';
import ClipLoader from 'react-spinners/ClipLoader';

class DocumentCardPanel extends Component {
  state = {
    data: null,
    isLoaded: true
  };

  componentDidMount() {
    this.fetchDocumentsData();
  };

  componentWillReceiveProps() {
    this.fetchDocumentsData();
  };

  filterResults = (document) => {
    const { filterName, filterFile } = this.props;
    return filterFile.includes(document.file_type) && filterName.includes(document.name_type);
  };

  fetchDocumentsData = () => {
    const { input } = this.props;
    this.setState({ isLoaded: false });
    getDocuments(input).then(
      (res) => {
        this.setState({ data: res.data.value, isLoaded: true });
      },
      (err) => {
        console.log(err);
      });
  };
 
  render () { 
    const { data, isLoaded } = this.state;
    const { filterName, filterFile } = this.props;
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
        <DocumentCard key={document.metadata_storage_path} data={document} filterName={filterName} filterFile={filterFile}/>)}</div>
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