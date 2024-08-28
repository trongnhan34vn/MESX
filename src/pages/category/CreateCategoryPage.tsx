import React, { useContext } from 'react';
import BackButton from '../../components/common/BackButton';
import CreateForm from '../../components/form/CreateForm';
import { Field } from '../../types/Form.type';
import { Category } from '../../types/Category.type';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../../thunks/categoryThunk';
import { categorySelector } from '../../redux/selector';
import { MainContext } from '../../context/context';
import { Response } from '../../types/ApiRestful.type';
import { HttpStatus } from '../../enum/HttpStatus';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getCreate } from '../../redux/reducers/categorySlice';

const CreateCategoryPage = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const mainContext = useContext(MainContext);
  const fields: Field[] = [
    {
      name: 'Tiêu đề',
      field: 'title',
      placeholder: 'Tiêu đề',
      required: true,
    },
    {
      name: 'Định danh',
      field: 'nominal',
      placeholder: 'Định danh',
      required: true,
    },
    {
      name: 'Online',
      field: 'online',
      placeholder: 'Online',
      required: true,
    },
  ];

  const initData: Category = {
    id: 0,
    title: '',
    nominal: '',
    online: '',
    type: 'category',
  };

  const onSubmit = (data: Category) => {
    let createCategoryMessage = 'Creating new category...';
    mainContext.setLoadingScreen({
      isShow: true,
      message: createCategoryMessage,
    });
    setTimeout(() => {
      dispatch(createCategory(data));
    }, 2000);
  };

  const response = useSelector(categorySelector).create;

  const reset = () => {
    dispatch(getCreate(null));
  };

  const handleResponse = (response: Response<Category> | null) => {
    let createCategorySuccessMessage = 'Tạo danh mục mới thành công!';
    let createCategoryFailMessage = 'Tạo mục mới thất bại';
    console.log(response);
    if (!response) return;
    if (response.status) {
      // tạo thành công
      toast.success(createCategorySuccessMessage);
      navigate(-1);
      mainContext.setLoadingScreen({
        isShow: false,
        message: '',
      });
      reset();
      return;
    }
    mainContext.setLoadingScreen({
      isShow: false,
      message: '',
    });
    reset();
    toast.error(createCategoryFailMessage);
    return;
  };

  return (
    <div>
      <BackButton />
      <CreateForm
        fields={fields}
        initData={initData}
        onSubmit={onSubmit}
        response={response}
        handleResponse={handleResponse}
      />
    </div>
  );
};

export default CreateCategoryPage;