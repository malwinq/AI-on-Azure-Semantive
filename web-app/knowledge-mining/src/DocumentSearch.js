import React, { Component } from 'react';
import DocumentCardPanel from './DocumentCardPanel';
import TextField from '@material-ui/core/TextField';
import debounce from 'lodash.debounce';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FILE_TYPES } from './functions';
 
const styles = {
  search: {
    width: '60%',
    fontSize: '14px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    justifyContent: 'center',
    marginBottom: '1%'
  },
  filters: {
    marginLeft: '15px',
    display: 'inline',
    marginRight: '10px'
  }
}

class DocumentSearch extends Component {
  state = {
      input: null,
      filterName: ["USA", "Europe"],
      filterFile: ["Image", "Complete Raport", "Editable Raport", "Calculations", "Undefined"]
  };

  handleChange = (event) => {
      this.setState({ input: event.target.value });
  };

  debouncedSave = debounce((event) => this.handleChange(event), 400);

  handleFilterNameChange = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    const filter = this.state.filterName;
    if (checked) {
      filter.push(name);
      this.setState({ filterName: filter });
    } else {
      const index = filter.indexOf(name);
      if (index > -1) {
        filter.splice(index, 1);
        this.setState({ filterName: filter });
      }
    }
  };

  handleFilterFileChange = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;
    const filter = this.state.filterFile;
    if (checked) {
      filter.push(name);
      this.setState({ filterFile: filter });
    } else {
      const index = filter.indexOf(name);
      if (index > -1) {
        filter.splice(index, 1);
        this.setState({ filterFile: filter });
      }
    }
  };
 
  render () { 
    const { classes } = this.props;
    const { filterName, filterFile, input } = this.state;
    return (
        <div>
            <form noValidate autoComplete="off">
              <TextField id="outline-basic" className={classes.search}
                label="Search for documents" 
                variant="outlined" 
                onChange={this.debouncedSave}
              />
            </form>
            <div>
              <b className={classes.filters}>Document type filter:</b>
              {FILE_TYPES.map((type) =>
                (<FormControlLabel className={classes.filters}
                  control={
                    <Checkbox
                      checked={filterFile.includes(type)}
                      onChange={this.handleFilterFileChange}
                      name={type}
                      color="primary"
                    />
                  }
                  label={type}
                />))}
            </div>
            <div>
              <b className={classes.filters}>Region filter:</b>
              <FormControlLabel className={classes.filters}
                control={
                  <Checkbox
                    checked={filterName.includes("USA") === true}
                    onChange={this.handleFilterNameChange}
                    name="USA"
                    color="primary"
                  />
                }
                label="USA"
              />
              <FormControlLabel className={classes.filters}
                control={
                  <Checkbox
                    checked={filterName.includes("Europe")}
                    onChange={this.handleFilterNameChange}
                    name="Europe"
                    color="primary"
                  />
                }
                label="Europe"
              />
            </div>
            {this.state.input && <DocumentCardPanel input={input} filterName={filterName} filterFile={filterFile}/>}
        </div>
    )
  }
}

export default withStyles(styles)(DocumentSearch);