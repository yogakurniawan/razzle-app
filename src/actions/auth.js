import { auth } from 'config/firebase'
import types from 'constants/actionTypes'

export function signin(username, password) {
  return {
    type: types.SIGNIN,
    promise: auth.doSignInWithEmailAndPassword(username, password).then(response => response)
  }
}

// export function signup(forPerson, secretSauce) {
//   return {
//     type: types.SIGNUP,
//     promise: fetchSecretSauce().then(response => response)
//   }
// }
