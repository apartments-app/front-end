import "./App.css";

import Landing from "./components/Landing";
import TenantHome from "./components/Homepage";
import ProfileCreation from "./components/ProfileCreation";
import SignUpListings from "./components/SignUp-Listings";


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

    </div>
  );
}

export default App;
