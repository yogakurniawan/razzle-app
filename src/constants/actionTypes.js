import { createActionTypes, createConstants } from 'utils/common'

export const SIGNIN = createActionTypes('SIGNIN')
export const ADD_PATIENT = createActionTypes('ADD_PATIENT')
export const SIGNUP = createActionTypes('SIGNUP')

export default createConstants(
  'SET_USER_LOGGED_IN',
)