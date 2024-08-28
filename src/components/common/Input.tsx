import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
  register: UseFormRegister<any>;
  name: string;
  field: string;
  required: boolean
  errors: FieldErrors
}

const Input = ({ type, placeholder, className, register, field, name, errors, required }: InputProps) => {
  const getRequiredField = () => {
    if (!required) return false;
    return name + ' is required!';
  }

  const handleErrors = () => {
    if (errors[field]) return 'border-red-500'
    return ''
  }
  return (
    <input
      {
        ...register(field, {
          required: getRequiredField(),
        })
      }
      type={type}
      placeholder={placeholder}
      className={`${className} ${handleErrors()} px-[16px] py-[10px] w-[260px] text-sm shadow-sm rounded-[3px] border-[#EDF0F4] border-[1px]`}
    />
  );
};

export default Input;
