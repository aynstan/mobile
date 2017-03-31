/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

import {
  LOGIN_USER_SUCCESS,
  //LOGIN_USER_FAIL,
  //LOGIN_USER
} from './types';

export const loginUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_SUCCESS });

    /*firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };*/
  };
};
