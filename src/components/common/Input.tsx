import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
}

const Input = ({ type, placeholder, className }: InputProps) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="px-[16px] py-[10px] w-[260px] text-sm shadow-sm rounded-[3px] border-[#EDF0F4] border-[1px]"
      />
    </div>
  );
};

export default Input;
