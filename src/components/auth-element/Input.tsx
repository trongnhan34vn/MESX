import React, { ReactNode } from 'react';
import { AuthFieldElement, UserSignIn } from '../../types/User.type';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type AuthFieldInputProps = AuthFieldElement & {
  register: UseFormRegister<UserSignIn>,
  errors: FieldErrors<UserSignIn>
  type: string
}

const Input = ({ field, icon, name, register, errors, type }: AuthFieldInputProps) => {
  const handleErrorMessage = () => {
    switch (field) {
      case 'password':
        return errors.password ? <span className={'text-red-500 text-xs p-2'}>{errors.password.message}</span> : <></>;
      case 'email':
        return errors.email ? <span className={'text-red-500 text-xs p-2'}>{errors.email.message}</span> : <></>;
    }
  };

  const handleErrorBorder = () => {
    switch (field) {
      case 'password':
        return errors.password ? 'border-red-500' : '';
      case 'email':
        return errors.email ? 'border-red-500' : '';
    }
  };
  return (
    <div className={'w-full mb-5'}>
      <div
        className={`${handleErrorBorder()} group flex focus-within:border-white gap-4 px-4 items-center rounded border-[1px] border-[hsla(0,0%,100%,.1)] bg-[#0000001a] w-full h-[52px] `}>
        {icon}
        <input
          {...register(field, {
            required: name + ' is required! Please enter ' + name + '!',
          })}
          className={'h-full bg-transparent w-full outline-none text-white'}
          type={type}
          placeholder={name}
          name={field}
        />
      </div>
      {handleErrorMessage()}
      {/*<span className={'text-red-500 text-xs p-2'}>Username không đúng</span>*/}
    </div>
  );
};

export default Input;