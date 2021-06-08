import React, { Component } from "react";
import { Route, Switch , BrowserRouter as Router} from "react-router-dom";import { createBrowserHistory as history} from 'history';
import Saved from "./Saved";
import Home from "./Home";


const App =()=> {
  return (
    
       <Router >
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/saved" component={Saved} />
                    
         </Switch>
          </Router>
   
  )
}

export default App

