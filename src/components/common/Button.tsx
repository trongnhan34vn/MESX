import React, { ReactNode } from 'react';

interface ButtonProps {
  title: string | ReactNode;
  className?: string;
  isPrimary?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  type: 'submit' | 'reset' | 'button' | undefined
}

const Button = ({ title, className, isPrimary, onClick, style, type }: ButtonProps) => {
  return (
    <div>
      <button
        style={style}
        type={type}
        onClick={onClick}
        className={`${className} ${
          isPrimary ? 'bg-[#0050ae] text-white' : 'bg-[#EDF0F4] text-[#666666]'
        } h-full font-semibold px-[16px] py-[10px] text-sm rounded-[3px] min-w-16 opacity-85 hover:opacity-100 transition-all duration-200 ease-in`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
