import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './reducers/authSlice';
import deviceSlice from './reducers/deviceSlice';
import categorySlice from './reducers/categorySlice';


const rootReducer = combineReducers({
  auth: authSlice,
  device: deviceSlice,
  category: categorySlice
});

export default rootReducer;