import React from 'react';
import Button from '../common/Button';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FunctionalBarDetail = () => {
  const navigate = useNavigate();
  return (
    <div className={'flex justify-between gap-4 border-b-[1px] pb-2'}>
      <Button onClick={() => {
        navigate(-1);
      }} title={<FaLongArrowAltLeft size={24} />} type={'button'} />
      <div className={'flex gap-4'}>
        <Button title={'Sửa thông tin'} type={'button'}
                className={'hover:bg-green-100 bg-transparent border-[1px] border-green-500 text-green-500'} />
        <Button title={'Xoá'} type={'button'}
                className={'hover:bg-red-100 bg-transparent border-[1px] border-red-500 text-red-500'} />
      </div>
    </div>
  );
};

export default FunctionalBarDetail;