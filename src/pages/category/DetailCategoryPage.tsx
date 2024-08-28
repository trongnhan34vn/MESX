import React, { useEffect } from 'react';
import { findById } from '../../thunks/categoryThunk';
import { useParams } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { categorySelector } from '../../redux/selector';
import DetailForm from '../../components/form/DetailForm';
import { ColumnDefinition } from '../../types/Table.type';
import { Category } from '../../types/Category.type';

const DetailCategoryPage = () => {
  const { categoryId } = useParams();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (!categoryId) return;
    dispatch(findById(categoryId));
  }, [categoryId]);

  const findByIdResponse = useSelector(categorySelector).findById;
  const category = findByIdResponse ? findByIdResponse.data : null;
  console.log(category);
  if (!category) return <div>Loading Category...</div>;

  const columns: ColumnDefinition<Category, keyof Category>[] = [
    {
      name: 'Tiêu đề',
      key: 'title',
    },
    {
      name: 'Định danh',
      key: 'nominal',
    },
    {
      name: 'Online',
      key: 'online',
    },
  ];

  return (
    <div>
      <DetailForm
        target={category}
        columns={columns}
      />
    </div>
  );
};

export default DetailCategoryPage;