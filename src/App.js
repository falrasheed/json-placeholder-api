import React from "react";
import Card from "./Homepage";
import {CardList} from "./components/card-list/card-list-component";
import Details from "./Detailspage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (

    <Router>
    <div className="app">
      <Switch>
        <Route path="/" exact component={Card}/>
        <Route path="/:id/" exact component={Details}/>
      </Switch>
    </div>
    </Router>
  );
}


export default App;
