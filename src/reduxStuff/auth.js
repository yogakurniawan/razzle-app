import { SIGNIN } from 'constants/actionTypes'

function auth(state = {
  userData: null
}, action) {
  const { payload, type } = action
  switch (type) {
    case SIGNIN.SUCCESS:
      return {
        ...state,
        userData: payload
      }
    default:
      return state
  }
}

export default auth
