import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { useState, useHistory } from "react";

import Landing from "./components/Landing";
import Homepage from "./components/Homepage";
import ProfileCreation from "./components/ProfileCreation";
import ProfileScreening from "./components/ProfileScreening";
import ProfilePage from "./components/ProfilePage";
import SignUpListings from "./components/SignUp-Listings";
import SignIn from "./components/SignIn";
import ProfileQuallities from "./components/ProfileQualities";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/Home" component={Homepage} />
        <Route path="/Listings" component={SignUpListings} />
        <Route path="/Profile" component={ProfileCreation} />
        <Route path="/Qualities" component={ProfileQuallities} />
        <Route path="/Screening" component={ProfileScreening} />
        <Route path="/ProfilePage" component={ProfilePage} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
