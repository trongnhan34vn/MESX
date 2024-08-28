import { createSlice } from '@reduxjs/toolkit';
import { Category } from '../../types/Category.type';
import { Response } from '../../types/ApiRestful.type';

type CategorySlice = {
  list: Response<Category[]> | null
  create: Response<Category> | null
  findById: Response<Category> | null
}

const initState: CategorySlice = {
  list: null,
  create: null,
  findById: null
};

const categorySlice = createSlice(
  {
    name: 'category',
    initialState: initState,
    reducers: {
      getAll: (state, action) => {
        state.list = action.payload;
      },
      getCreate: (state, action) => {
        state.create = action.payload;
      },
      getById: (state, action) => {
        state.findById = action.payload
      }
    },
  },
);

export default categorySlice.reducer;
export const { getAll, getCreate, getById } = categorySlice.actions;