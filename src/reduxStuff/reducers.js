import { combineReducers } from 'redux'

import global from './global'
import auth from './auth'
import patient from './patient'
import loading from './loadingReducer'
import error from './errorReducer'

export default combineReducers({
  global,
  auth,
  patient,
  loading,
  error
})
