import types from 'constants/actionTypes'

function auth(state = {
  userSignedIn: false,
  userData: null,
  error: null,
  loading: false
}, action) {
  const { payload, type, error } = action
  switch (type) {
    case types.SIGNIN:
      return {
        ...state,
        loading: true
      }
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: payload,
        error: null
      }
    case types.SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        userData: null,
        error
      }
    default:
      return state
  }
}

export default auth
