import { auth } from 'config/firebase'
import constants, { SIGNIN, SIGNUP } from 'constants/actionTypes'
import { makeActionCreator } from 'utils/redux'

const { SIGN_OUT } = constants
export const signOut = makeActionCreator(SIGN_OUT)

export function signin(email, password) {
  return {
    type: SIGNIN,
    promise: auth.doSignInWithEmailAndPassword(email, password).then(response => response)
  }
}

export function signup(email, password) {
  return {
    type: SIGNUP,
    promise: auth.doCreateUserWithEmailAndPassword(email, password).then(response => response)
  }
}