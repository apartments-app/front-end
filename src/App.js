import  { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { useState, useHistory } from 'react';

import Landing from "./components/Landing";
import Homepage from "./components/Homepage";
import ProfileCreation from "./components/ProfileCreation";
import SignUpListings from "./components/SignUp-Listings";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      {/* test the landing page */}
      <Landing />
      {/* test the tenant home */}
      <TenantHome />
      {/* test the profile creation */}
      <ProfileCreation />
      <SignUpListings />
      <SignIn />
    </div>
  );
}

export default App;
