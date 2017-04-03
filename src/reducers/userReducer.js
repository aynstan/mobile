import initialState from '../store/initialState';

import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  // LOGIN_USER
} from '../actions/types';

export default function user(state = initialState.user, action) {
	switch (action.type) {
	case LOGIN_USER_SUCCESS:
		return { ...state, authenticated: true };
	case LOGIN_USER_FAIL:
		return { ...state, authenticated: false };
	default:
		return state;
	}
}
