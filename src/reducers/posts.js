import initialState from '../store/initialState';

export default function posts(state = initialState.posts, action) {
  if (action) {
    return state;
  }
  return state;
}
