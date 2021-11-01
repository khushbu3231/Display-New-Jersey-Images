import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import DisplayImages from "./Components/DisplayImages";
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Dashboard} />         
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
