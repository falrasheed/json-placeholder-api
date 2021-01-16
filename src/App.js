import React from "react";
import Card from "./Homepage";
import Details from "./Detailspage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (

    <Router>
    <div className="app">
      <Switch>
        <Route path="/" exact component={Card}/>
        <Route path="/detailspage" component={Details}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
