import './App.css';
import Dashboard from './components/dashboard/Dashboard.js';
import Sidebar from './components/sidebar/Sidebar.js';
import Topbar from './components/topbar/Topbar.js';

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div>
        <Topbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
