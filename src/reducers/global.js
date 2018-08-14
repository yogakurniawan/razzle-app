import types from 'constants/actionTypes'

function global(state = {
  userLoggedIn: false,
  fromPerson: '',
  forPerson: '',
  toPerson: '',
  error: '',
  secretSauce: ''
}, action) {
  const { payload, type, fromPerson, forPerson, toPerson, error, secretSauce } = action
  switch (type) {
    case types.SET_USER_LOGGED_IN:
      return {
        ...state,
        userLoggedIn: payload
      }
    case 'MAKE_SANDWICH':
      return {
        ...state,
        forPerson,
        secretSauce
      }
    case 'MAKE_SANDWICH_SUCCESS':
      return {
        ...state,
        secretSauce: payload
      }
    case 'APOLOGIZE':
      return {
        ...state,
        fromPerson,
        toPerson,
        error
      }
    default:
      return state
  }
}

export default global
