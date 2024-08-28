

import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import { UserSignIn } from '../types/User.type';
import { signInService } from '../services/authService';
import { getSigninResponse } from '../redux/reducers/authSlice';

export const signIn = (user: UserSignIn) => {
  return async function signInThunk(dispatch: Dispatch) {
    try {
      let response = await signInService(user);
      console.log('Thunk response: ' + response.data);
      dispatch(getSigninResponse(response));
    } catch (error) {
      let err = error as AxiosError;
      console.log(err.response);
      if (!err.response) return;
      let response = err.response.data;
      dispatch(getSigninResponse(response))
    }
  };
};
