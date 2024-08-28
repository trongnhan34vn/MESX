import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { GrTransaction } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

type FunctionalBarProps = {
  createRoutePath: string
}

const FunctionalBar = ({ createRoutePath }: FunctionalBarProps) => {
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate(createRoutePath);
  };
  return (
    <div className="bg-[#f4f8ff] w-full ">
      <div className="flex items-center">
        <button onClick={navigateToPage} className="py-[10px] px-[16px] flex gap-2 hover:bg-[#2222220a]">
          <div className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded">
            <FaPlus size={14} color="white" />
          </div>
          <p className="text-sm font-bold">Tạo mới</p>
        </button>
        <hr className="h-6 w-[1px] bg-[#cbcbcb]" />

        <button className="py-[10px] px-[16px] flex items-center gap-2 hover:bg-[#2222220a]">
          <GrTransaction color="blue" />
          <p className="text-sm font-bold">Nhập/xuất dữ liệu</p>
        </button>
      </div>
    </div>
  );
};

export default FunctionalBar;
