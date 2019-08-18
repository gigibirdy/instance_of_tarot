import React, { Component } from 'react';
import Form from "./form.component.js";
import CardSpreads from "./cardSpreads.component.js";
import {Route, Switch} from "react-router-dom";

class TarotRoute extends React.Component {
  render() {
    return (
      <Switch>
      <Route exact path="/tarot" render={(routeProps)=><Form {...routeProps}/>}/>
      <Route exact path="/tarot/tarotresult/:numberOfCards/:question" render={(routeProps)=><CardSpreads {...routeProps}/>}/>
      <Route render={()=><h1>Not Found. Please select a spread and ask one question.</h1>}/>
      </Switch>
    );
  }
}

export default TarotRoute;
