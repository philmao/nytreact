import React, { Component } from "react";
import ReactDOM from "react-dom";
import API from "../../utils/API";

class SavedArticles extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  // handleButtonClick() {
  //   const newQuote = this.state.inputValue;
  //   API.saveQuote(newQuote).then(this.props.getQuotes);
  //   this.setState({ inputValue: "" });
  // }
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-sm-offset-2 col-sm-8">
          <div style={styles.formStyle} className="panel panel-primary saved-articles">
            <div className="panel-heading">
              <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>    Saved Articles</strong></h3>
            </div>
            <div className="panel-body">
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const styles = {

  formStyle: {
    marginBottom: 20,
    marginTop: 20
  }
};

export default SavedArticles;