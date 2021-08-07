import React from 'react';
import './App.scss';
import "@fontsource/roboto";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      {/* <DynamicBackground/> */}
      {/* <AppRouter/> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          {/* <Route path="/stack" component={Portfolio} exact /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
