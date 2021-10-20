import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { useState, useHistory } from "react";

import Landing from "./components/Landing";
import Homepage from "./components/Homepage";
import ProfileCreation from "./components/ProfileCreation";
import SignUpListings from "./components/SignUp-Listings";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/SignIn" component={SignIn} />
        <Route path="/Home" component={Homepage} />
        <Route path="/Listings" component={SignUpListings} />
        <Route path="/Profile" component={ProfileCreation} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
