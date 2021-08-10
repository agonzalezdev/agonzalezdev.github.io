import React, { useState } from 'react';
import './App.scss';
import "@fontsource/roboto";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./component/navbar/index"

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <BrowserRouter>
      {/* <Preloader load={load} /> */}
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} /> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
