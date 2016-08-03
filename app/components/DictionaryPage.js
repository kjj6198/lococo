import React, {  Component,  PropTypes} from 'react';

export default class DictionaryPage extends Component {
  render() {
    
    return (
      <div>
<h2>DictionaryPage</h2>
{this.renderDictionary()}
      </div>
    );
  }

  renderDictionary() {
    let dictionaries=this.props.dictionary.dictionaries;
    // let dictionaries = this.props.files.dictionaries;
    let renderFileItem = this.renderFileItem;
    let clickDictionary=this.clickDictionary.bind(this);
    if (dictionaries.length === 0) {
      return (<p>No files</p>)
    } else {
      return dictionaries.map(dic => renderFileItem(dic,clickDictionary))
    }
  }

  renderFileItem(file,clickDictionary) {
    return (<a key={file} onClick={()=>clickDictionary(file)}>{file}</a>);
  }

  clickDictionary(file){
    const clickDictionary = this.props.actions.clickDictionary;
clickDictionary(file);
  }
}

// FilePages.propTypes = {
//   actions: PropTypes.object.isRequired
// }
