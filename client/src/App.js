// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import Main from "./components/Main";

const App = () =>
	<Router>
	  <Route exact path="/" component={Main} />
	</Router>;

export default App;