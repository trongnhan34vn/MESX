import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoadingScreen from '../components/common/LoadingScreen';
import { LoadingScreenType } from '../types/Others.type';
import { AuthContext } from '../context/context';

const AuthenLayout = () => {
  const initLoadingScreen: LoadingScreenType = {
    isShow: false,
    message: ''
  }
  const [loadingScreen, setLoadingScreen] = useState<LoadingScreenType>(initLoadingScreen);
  return (
    <AuthContext.Provider value={{setLoadingScreen, loadingScreen}}>
      <div
        style={{ backgroundImage: `url(${require('../assets/img/background-login.png')})` }}
        className={"w-full h-full bg-center bg-no-repeat bg-cover"}
      >
        <Outlet />
        <Toaster position={'top-center'} />
        <LoadingScreen isShow={loadingScreen?.isShow} message={loadingScreen?.message} />
      </div>
    </AuthContext.Provider>
  );
};

export default AuthenLayout;