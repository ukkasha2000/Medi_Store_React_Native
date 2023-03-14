import {USER_LOGIN} from '../types';

export const addToCart = val => {
  return dispatch => {
    dispatch({
      type: USER_LOGIN,
      payload: {cartVal: val},
    });
  };
};
