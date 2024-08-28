import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/sidebar.css';
import MainLayout from './layouts/MainLayout';
import RealTimeMonitoring from './pages/real-time/RealTimeMonitoring';
import RealTimeMonitoringDevice from './pages/real-time/RealTimeMonitoringDevice';
import DevicePage from './pages/device/DevicePage';
import LoginPage from './pages/LoginPage';
import AuthenLayout from './layouts/AuthenLayout';
import CreateDevicePage from './pages/device/CreateDevicePage';
import DetailDevicePage from './pages/device/DetailDevicePage';
import Dashboard from './pages/Dashboard';
import CategoryPage from './pages/category/CategoryPage';
import CreateCategoryPage from './pages/category/CreateCategoryPage';
import DetailCategoryPage from './pages/category/DetailCategoryPage';

function App() {
  return (
    <div className="App bg-[#EDEFEF] h-screen overflow-hidden">
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <Routes>
        // Authentication
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <Route path={'/'} element={<AuthenLayout />}>
          <Route path={''} element={<LoginPage />} />
        </Route>

        // Main
        <Route path="/app" element={<MainLayout />}>
          <Route path={"dashboard"} element={<Dashboard />} />
          <Route path="device">
            <Route index element={<DevicePage />} />
            <Route path="create" element={<CreateDevicePage />} />
            <Route path="detail/:deviceId" element={<DetailDevicePage />} />
          </Route>
          <Route path="category">
            <Route index element={<CategoryPage />} />
            <Route path="create" element={<CreateCategoryPage />} />
            <Route path="detail/:categoryId" element={<DetailCategoryPage />} />
          </Route>
          <Route path={'power-monitoring'} >
            <Route path={'real-time-monitoring'} element={<RealTimeMonitoring />} />
            <Route path={'real-time-monitoring/device/:id'} element={<RealTimeMonitoringDevice />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
