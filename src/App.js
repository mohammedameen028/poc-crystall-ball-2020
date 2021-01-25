import React from 'react';
import Home from './components/Home'
import Login from './components/Login'
import ArticleList from './components/ArticleList'
import ArticleReader from './components/ArticleReader'
import Subscription from './components/Subscription'
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/Reader" component = {ArticleReader}></Route>
          <Route path="/ArticleList" component = {ArticleList}></Route>
          <Route path="/Subscription" component = {Subscription}></Route>
          <Route path="/Login" component = {Home}></Route>
          <Route component = {Login}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
