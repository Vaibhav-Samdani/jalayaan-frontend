
import './App.css';
import Map from './compenents/Map';
import Navbar from './compenents/Navbar';
import SideBar from './compenents/SideBar';
import MapViewer from './compenents/MapViewer';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Map/> */}
      <MapViewer/>
      {/* <SideBar/> */}
    </div>
  );
}

export default App;
