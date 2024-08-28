import React, { useEffect, useState } from 'react';
import SidebarComp from '../components/page-element/SidebarComp';
import Header from '../components/page-element/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoadingScreen from '../components/common/LoadingScreen';
import { MainContext } from '../context/context';
import { LoadingScreenType } from '../types/Others.type';
import { useCookies } from 'react-cookie';

const MainLayout = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(['user', 'token']);
  const token = cookies.token;
  useEffect(() => {
    if (!cookies.token) {
      let alertMessage = 'Unauthorized! Please sign in!';
      alert(alertMessage);
      navigate('/login');
      return;
    }
  }, [cookies]);
  const initLoadingScreen: LoadingScreenType = {
    isShow: false,
    message: '',
  };
  const [loadingScreen, setLoadingScreen] = useState<LoadingScreenType>(initLoadingScreen);
  return (
    <MainContext.Provider value={{ loadingScreen, setLoadingScreen }}>
      {!token && (
        <div suppressHydrationWarning={true} className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-80 backdrop-blur-md z-[9999]"></div>
      )}
      <div className={`flex h-full`}>
        <div>
          <SidebarComp />
        </div>
        <div className="w-full h-full">
          <Header />
          <div className="w-full h-[calc(100vh-64px)] p-4">
            <div className="w-full h-full bg-white relative">
              <Outlet />
              <LoadingScreen message={loadingScreen.message} isShow={loadingScreen.isShow} />
            </div>
          </div>
        </div>
        <Toaster position={'top-center'} />
      </div>
    </MainContext.Provider>

  );
};

export default MainLayout;
