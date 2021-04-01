import React from "react";
import "./App.css";
import 'fontsource-roboto';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import RamenPage from "./components/ramen/RamenPage";
import TopTenPage from "./components/topten/TopTenPage";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />

      <br />

      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/ramen" component={RamenPage} />
        <Route path="/top" component={TopTenPage} />
      </Switch>
    </div>
  );
}

export default App;
