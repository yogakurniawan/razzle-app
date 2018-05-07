import { db } from 'config/firebase'
import { ADD_PATIENT } from 'constants/actionTypes'

export function createPatient(fullName, practiceName) {
  return {
    type: ADD_PATIENT,
    promise: db.createPatient(fullName, practiceName).then(response => response)
  }
}

// export function signup(forPerson, secretSauce) {
//   return {
//     type: types.SIGNUP,
//     promise: fetchSecretSauce().then(response => response)
//   }
// }
