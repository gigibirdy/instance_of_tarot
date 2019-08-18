import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./components/home.component.js";
import Tarot from "./components/tarot.component.js";
class AppRoute extends React.Component {
    render(){
      return(
        <Switch>
        <Route exact path="/" render={() => <Home />}/>
        <Route path="/tarot" render = {() => <Tarot />}/>
        </Switch>
      )
    }
}


export default AppRoute;
