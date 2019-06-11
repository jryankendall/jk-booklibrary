import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./pages/List";
import Search from "./pages/Search";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/list" component={List} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
