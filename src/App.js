import './App.css';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Footer from './components/Footer'
import BrandSidebar from './components/BrandSidebar';
import ItemDashboard from './components/ItemDashboard';

function App() {
  return (
    <div className="App">
    <Sidebar />
    <Topbar />
    <Footer />
    <BrandSidebar />
    <ItemDashboard />

    
    </div>
  );
}

export default App;
