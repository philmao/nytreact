import React from "react";
import ReactDOM from "react-dom";

const Panel = props =>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h2>
        {props.title}
      </h2>
      <button
        onClick={this.handleSaveArticle}
        className="btn btn-default"
        style={styles.buttonStyle}
        date-date={props.pub_date}
        data-url={props.web_url}
      >
        Save
      </button>
    </div>
  </div>;

  const styles = {
    buttonStyle: {
      float: "right",
      marginTop: 10
    }
  };

export default Panel;
