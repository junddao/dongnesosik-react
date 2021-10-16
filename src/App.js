import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { EmptyPage } from "./components/EmptyPage";
import { NavigationBar } from "./components/NavigationBar";
import "./assets/css/bootstrap.css";
import "./assets/css/theme.css";
// import "./assets/css/maicons.css";
import "./assets/vendor/animate/animate.css";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/" activeClassName="active">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <EmptyPage></EmptyPage>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
