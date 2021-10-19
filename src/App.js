import './App.css';

import Landing from './components/Landing';
import TenantHome from './components/TenantHome';
import ProfileCreation from './components/ProfileCreation'; 

function App() {
  return (
    <div className="App">
      <Landing/>
      <TenantHome/>
      <ProfileCreation />
    </div>
  );
}

export default App;
