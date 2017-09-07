import React, { Component } from "react";
import API from "../../utils/API";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      startDate: "",
      endDate: ""
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  handleButtonClick() {
    const newQuote = this.state.inputValue;
    API.saveQuote(newQuote).then(this.props.getQuotes);
    this.setState({ inputValue: "" });
  }
  submit(e) {
      var self
      
      e.preventDefault()
      self = this

      console.log(this.state);

      var data = {
        topic: this.state.topic,
        startYear: this.state.startYear,
        endYear: this.state.endYear
      }

      var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      url += '?' + $.param({
        'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        'q': "trump",
        'begin_date': "20170801",
        'end_date': "20170901"
      })
      // Submit form via jQuery/AJAX
      $.ajax({
        url: url,
        method: 'GET',
      }).done(function(result) {
        console.log(result);
      }).fail(function(err) {
        throw err;
      });

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-2 col-sm-8">
            <div style={styles.formStyle} className="panel panel-primary search-form">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>    Search</strong></h3>
              </div>
              <div className="panel-body">
                <form role="form" onSubmit={this.submit}>

                  <div className="form-group">
                    <label for="search">Topic:</label>
                    <input type="text" className="form-control" id="topic" />
                  </div>

                  <div className="form-group">
                    <label for="start-year">Start Year:</label>
                    <input type="text" className="form-control" id="startYear" />
                  </div>

                  <div className="form-group">
                    <label for="end-year">End Year:</label>
                    <input type="text" className="form-control" id="endYear" />
                  </div>

                  <button
                    onClick={this.handleButtonClick}
                    className="btn btn-default"
                    style={styles.buttonStyle}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-offset-2 col-sm-8">
            <div style={styles.formStyle} className="panel panel-primary results">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>    Results</strong></h3>
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
  buttonStyle: {
    float: "right",
    marginTop: 10
  },
  formStyle: {
    marginBottom: 20,
    marginTop: 20
  }
};

export default SearchForm;