import "./App.css";

import Landing from "./components/Landing";
import TenantHome from "./components/Homepage";
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
