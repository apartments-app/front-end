import './App.css';

import Landing from './components/Landing';
import TenantHome from './components/TenantHome';
import ProfileCreation from './components/ProfileCreation'; 

function App() {
  return (
    <div className="App">
      {/* test the landing page */}
      <Landing/>
      {/* test the tenant home */}
      <TenantHome/>
      {/* test the profile creation */}
      <ProfileCreation />
    </div>
  );
}

export default App;
