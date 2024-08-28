import React, { useEffect } from 'react';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { findAll } from '../../thunks/categoryThunk';
import { categorySelector } from '../../redux/selector';
import { generateStageTab } from '../../utils/tabStageUtils';
import { Category } from '../../types/Category.type';
import PageLayout from '../../layouts/PageLayout';
import { ColumnDefinition } from '../../types/Table.type';

const CategoryPage = () => {
  const dispatch: AppDispatch = useDispatch();

  // find all category
  useEffect(() => {
    dispatch(findAll());
  }, []);

  // response
  const listResponse = useSelector(categorySelector).list;
  let categories = listResponse ? listResponse.data : [];
  categories = categories.map(category => ({
    ...category, type: 'category',
  }));

  const activeCategories: Category[] = [];
  const inactiveCategories: Category[] = [];
  const categoryStageTabs = generateStageTab<Category>(categories, activeCategories, inactiveCategories);

  // columns
  const columns: ColumnDefinition<Category, keyof Category>[] = [
    {
      name: "Tiêu đề",
      key: 'title'
    },
    {
      name: "Định danh",
      key: 'nominal'
    },
    {
      name: "Online",
      key: 'online'
    }
  ]

  const createRoutePath = '/app/category/create';

  return (
    <div>
      <PageLayout
        createRoutePath={createRoutePath}
        columns={columns}
        tabData={categoryStageTabs}
      />
    </div>
  );
};

export default CategoryPage;