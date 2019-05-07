import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Contacts from "./Components/contacts/Contacts";
import AddContact from "./Components/contacts/AddContact";
import Contact from "./Components/contacts/Contact";
import Header from "./Components/layout/Header";
//import MyNav from "./Components/MyNav";
import { Provider } from "./context";
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";
import EditContact from "./Components/contacts/EditContact";
//import RenderCont from "./Components/RenderCont.js";

class App extends Component {
  render() {
    // console.log(contacts);
    return (
      <Provider>
        <Router>
          <div className="App">
            {/* <MyNav /> */}
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
              {/* <AddContact />
              <Contacts /> */}
              {/* <Contact
            name="Dharam Singh Bisht"
            email="bdharam7@gmail.com"  
            phone="8439700516"
          />
          <Contact
            name="yogesh Singh"
            email="yogi@gmail.com"
            phone="3333333333"
          /> */}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
