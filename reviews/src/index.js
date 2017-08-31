import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Reviews from "./reviews/reviews";
import ReviewForm from "./reviewForm/reviewForm";
import Dashboard from "./dashboard/index";
import registerServiceWorker from "./registerServiceWorker";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Reviews} />
        <Route  path="/dashboard" component={Dashboard} />
        <Route path='/new/:id/:for?/:from?' component={ReviewForm} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
