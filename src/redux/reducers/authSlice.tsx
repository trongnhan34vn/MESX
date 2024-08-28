import { createSlice } from '@reduxjs/toolkit';
import { Response } from '../../types/ApiRestful.type';
import { AccessTokenType } from '../../types/Others.type';

type AuthSlice = {
  signinResponse: Response<AccessTokenType> | null;
};

const initialState: AuthSlice = {
  signinResponse: null,
};

const authSlice = createSlice(
  {
    name: 'auth',
    initialState,
    reducers: {
      getSigninResponse: (state, action) => {
        state.signinResponse = action.payload
      }
    },
  },
);

export default authSlice.reducer;
export const { getSigninResponse } = authSlice.actions;