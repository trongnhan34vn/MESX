import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Response } from '../../types/ApiRestful.type';
import { Field } from '../../types/Form.type';
import Input from '../common/Input';
import Button from '../common/Button';
import { useForm } from 'react-hook-form';

/*
 * 1.param:
 * fields[] : Fields<T>{name, field, placeholder, required}
 * initData: T
 * onSubmit: (data: T)=>void
 * response: Response<T> | null
 * handleResponse = () => void
 *
 * 2. Implement
 * a. handleOnSubmit(data:T) call onSubmit(data: T)
 * b. handleResponse. useEffect dependency (response)
 *
 * */

type CreateFormProps<T> = {
  fields: Field[]
  initData: T;
  onSubmit: (data: T) => void
  response: Response<T> | null
  handleResponse: (response: Response<T> | null) => void
}

const CreateForm = <T, >({ fields, initData, onSubmit, response, handleResponse }: CreateFormProps<T>) => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<any>({
    defaultValues: initData,
  });

  const handleOnSubmit = (data: T, e: any) => {
    e.preventDefault();
    onSubmit(data);
  };

  const cancelCreate = () => {
    navigate(-1);
  };

  useEffect(() => {
    handleResponse(response);
  }, [response]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleOnSubmit)} className={'animate-fade-right px-20 py-10'}>
        <div className={'grid grid-cols-2 gap-x-16 gap-y-5 mb-10'}>
          {
            fields.map((field, index) => {
              return (
                <div key={index} className={'flex gap-4 items-center w-full'}>
                  <p className={'w-1/5'}>{field.name}<span className={'text-red-500'}>*</span>:</p>
                  <Input required={field.required} errors={errors} register={register} name={field.name} field={field.field} type={'text'}
                         className={'!w-full flex-1'} placeholder={field.placeholder} />
                </div>
              );
            })
          }
        </div>
        <div className={'flex justify-end gap-5'}>
          <Button type={'button'} onClick={cancelCreate} title={'Huỷ'} />
          <Button type={'submit'} title={'Tạo mới'} isPrimary={true} />
        </div>

      </form>
    </div>
  );
};

export default CreateForm;