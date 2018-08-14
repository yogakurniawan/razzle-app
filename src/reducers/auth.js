import constants, { SIGNIN, SIGNUP } from 'constants/actionTypes'

function auth(state = {
  userData: null,
  signUpResponse: null
}, action) {
  const { payload, type } = action
  switch (type) {
    case SIGNIN.SUCCESS:
      return {
        ...state,
        userData: payload
      }
    case SIGNUP.SUCCESS:
      return {
        ...state,
        signUpResponse: payload
      }
    case constants.SIGN_OUT:
      return {
        ...state,
        userData: null
      }
    default:
      return state
  }
}

export default auth
