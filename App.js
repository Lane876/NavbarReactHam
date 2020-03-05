import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Drawer from "./Components/Drawer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Spacer from "./Components/Spacer";

class App extends Component {
  state = {
    drawerOpen: false
  };

  toggleDrawer = () => {
    this.setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar toggle={this.toggleDrawer} btn={this.state.drawerOpen} />
          <Drawer toggle={this.state.drawerOpen} />
          <Spacer />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
