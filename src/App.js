import logo from "./logo.svg";
import "./App.css";

import Landing from "./components/Landing";
import TenantHome from "./components/TenantHome";
import ProfileCreation from "./components/ProfileCreation";
import SignupListings from "./components/SignUp-Listings";

function App() {
  return (
    <div className="App">
      <Landing />
      <TenantHome />
      <ProfileCreation />
      <SignupListings />
    </div>
  );
}

export default App;
