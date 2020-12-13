import React, { Component } from 'react';
import { getKeywords } from './functions';
 
class DocumentCard extends Component { 
  state = {
      documentName: null,
      keywords: []
  }

  componentDidMount() {
    //   if (this.props.documentName) {
    //     const docKeywords = getKeywords(this.props.documentName);
    //     this.setState({ keywords: docKeywords });
    //   }
    //   console.log(this.state.keywords);
  }

  render () { 
    const { documentName, keywords } = this.props;
    return (
        <div>
            Document Name: {documentName}
            Keywords: {keywords}
        </div>
    )
  }
}

export default DocumentCard;