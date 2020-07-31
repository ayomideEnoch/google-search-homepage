import React from "react";
import Home from "./pages/Home/";
import SearchPage from "./pages/SearchPage/";
import "./styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:searchValue" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
