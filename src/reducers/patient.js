import { ADD_PATIENT } from 'constants/actionTypes'

function patient(state = {
  payload: null
}, action) {
  const { payload, type } = action
  switch (type) {
    case ADD_PATIENT.SUCCESS:
      return {
        ...state,
        payload
      }
    default:
      return state
  }
}

export default patient
