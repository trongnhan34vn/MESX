import React from 'react';
import Button from './Button';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className={'border-b-[1px] pb-2'}>
      <Button onClick={() => {
        navigate(-1);
      }} title={<FaLongArrowAltLeft size={24} />} type={'button'} />
    </div>
  );
};

export default BackButton;