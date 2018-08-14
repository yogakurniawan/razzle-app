import { combineReducers } from 'redux'
import constants from 'constants/actionTypes'

import global from './global'
import auth from './auth'
import patient from './patient'
import loading from './loadingReducer'
import error from './errorReducer'

const appReducer = combineReducers({
  global,
  auth,
  patient,
  loading,
  error
})

export default (state, action) => {
  if (action.type === constants.SIGN_OUT) {
    state = undefined
  }

  return appReducer(state, action)
}
