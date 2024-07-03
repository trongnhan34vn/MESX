import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/sidebar.css';
import MainLayout from './layouts/MainLayout';
import ProductStage from './pages/ProductStage';
import RealTimeMonitoring from './pages/RealTimeMonitoring';
import RealTimeMonitoringDevice from './pages/RealTimeMonitoringDevice';

function App() {
  return (
    <div className="App bg-[#EDEFEF] h-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="product-stage" element={<ProductStage />} />
          <Route path={'real-time-monitoring'} element={<RealTimeMonitoring />} />
          <Route path={'real-time-monitoring/device/:id'} element={<RealTimeMonitoringDevice />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
