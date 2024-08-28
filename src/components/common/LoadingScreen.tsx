import React from 'react';
import { ThreeDot } from 'react-loading-indicators';

type LoadingScreenProps = {
  message: string
  isShow: boolean
}

const LoadingScreen = ({ message, isShow }: LoadingScreenProps) => {
  return (
    <div
      className={`${isShow ? '' : 'hidden'} animate-fade absolute top-0 bottom-0 left-0 right-0 z-50  flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md`}>
      <ThreeDot variant="bounce" color="#01aef8" size="medium" text={message} textColor="" />
    </div>
  );
};

export default LoadingScreen;