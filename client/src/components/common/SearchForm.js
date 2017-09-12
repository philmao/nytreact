import React, { Component } from "react";
import ReactDOM from "react-dom";
import Panel from "../common/Panel";
import API from "../../utils/API";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      topic: "",
      startYear: "",
      endYear: "",
      results: {}
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSaveArticle = this.handleSaveArticle.bind(this);
  }

  searchArticles = query => {
    API.search(query)
      .then(res => {
        console.log(res.data.response.docs);
        this.setState({ results: res.data.response.docs });
        console.log(this.state.results[0].headline.print_headline);
        console.log(this.state.results[0].pub_date);
        console.log(this.state.results[0].web_url);
      })
      .catch(err => console.log(err));
  };

  handleInputChange(event) {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit(event) {
      
      event.preventDefault()

      console.log(this.state);

      var query = "&q=" + this.state.topic;
      query += "&begin_date=" + this.state.startYear + "0101";
      query += "&end_date=" + this.state.endYear + "1231";
      console.log(query);

      this.searchArticles(query);

  };

  handleSaveArticle(event) {
    // Getting the value and name of the input which triggered the change
    // const value = event.target.value;
    // const name = event.target.name;

    // Updating the input's state
    // this.setState({
    //   [name]: value
    // });
  };

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
                <form role="form">

                  <div className="form-group">
                    <label htmlFor="search">Topic:</label>
                    <input 
                      value={this.state.topic}
                      name="topic"
                      onChange={this.handleInputChange}
                      type="text" 
                      className="form-control" 
                      id="topic" 
                  />
                  </div>

                  <div className="form-group">
                    <label htmlFor="start-year">Start Year:</label>
                    <input 
                      value={this.state.startYear}
                      name="startYear"
                      onChange={this.handleInputChange}
                      type="text" 
                      className="form-control" 
                      id="startYear" 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="end-year">End Year:</label>
                    <input 
                      value={this.state.endYear}
                      name="endYear"
                      onChange={this.handleInputChange}
                      type="text" 
                      className="form-control" 
                      id="endYear" 
                    />
                  </div>

                  <button
                    onClick={this.handleFormSubmit}
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
                {this.state.results[0]
                    ? <Panel
                      title={this.state.results[0].headline.print_headline}
                      date-date={this.state.results[0].pub_date}
                      data-url={this.state.results[0].web_url}
                      />
                    : <h3>No Results to Display</h3>}
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