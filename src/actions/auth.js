import { auth } from 'config/firebase'
import constants, { SIGNIN } from 'constants/actionTypes'
import { makeActionCreator } from 'utils/common'

const { SIGN_OUT } = constants
export const signOut = makeActionCreator(SIGN_OUT)

export function signin(username, password) {
  return {
    type: SIGNIN,
    promise: auth.doSignInWithEmailAndPassword(username, password).then(response => response)
  }
}

// export function signup(forPerson, secretSauce) {
//   return {
//     type: types.SIGNUP,
//     promise: fetchSecretSauce().then(response => response)
//   }
// }
