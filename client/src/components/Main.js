import React from "react";
import Jumbotron from "./common/Jumbotron";
import SearchForm from "./common/SearchForm";
import SavedArticles from "./common/SavedArticles";
import Footer from "./common/Footer";

const Main = props => (
  <div>
    <Jumbotron />
    <SearchForm />
    <SavedArticles />
    {props.children}
    <Footer />
  </div>
);

export default Main;
