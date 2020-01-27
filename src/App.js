import React from 'react';
import Home from './components/Home'
import Login from './components/Login'
import ArticleList from './components/ArticleList'
import Subscription from './components/Subscription'
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/ArticleList" component = {ArticleList}></Route>
          <Route path="/Subscription" component = {Subscription}></Route>
          <Route path="/Home" component = {Login}></Route>
          <Route component = {Home}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
