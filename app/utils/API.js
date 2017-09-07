import axios from "axios";
const BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "?api-key=14622d11a404465883f3efc21bf2daff";

export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query);
  }
};
