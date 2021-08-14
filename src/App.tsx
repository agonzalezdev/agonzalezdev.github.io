import React, { useState } from 'react';
import './App.scss';
import "@fontsource/roboto";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LeftBar from './components/LeftBar';
import BottomBar from './components/BottomBar';
import TopBar from './components/TopBar';
import Routes from "./routes"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BottomBar />
        <LeftBar />
        <Switch>
          <TopBar>
            {Routes.map(route => (
              <Route path={route.path} exact component={route.component} />
            ))}
          </TopBar>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

