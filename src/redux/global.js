import { SET_USER_LOGGED_IN } from 'constants/actionTypes'

function global(state = {
  userLoggedIn: false
}, action) {
  const { payload, type } = action;
  switch (type) {
    case SET_USER_LOGGED_IN:
      return {
        ...state,
        userLoggedIn: payload
      }
    default:
      return state;
  }
}

export default global;
