import { makeActionCreator } from 'utils/common'

export const makeASandwich = makeActionCreator('MAKE_SANDWICH', 'forPerson', 'secretSauce')
export const apologize = makeActionCreator('APOLOGIZE', 'fromPerson', 'toPerson', 'error')

function fetchSecretSauce() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('sauce enak')
    }, 3000)
  })
}

export function makeASandwichWithSecretSauce(forPerson, secretSauce) {
  return {
    type: 'MAKE_SANDWICH',
    forPerson,
    secretSauce,
    promise: fetchSecretSauce().then(response => response)
  }
}

// export function makeASandwichWithSecretSauce(forPerson) {

//   // Invert control!
//   // Return a function that accepts `dispatch` so we can dispatch later.
//   // Thunk middleware knows how to turn thunk async actions into actions.

//   return async function (dispatch) {
//     try {
//       const sauce = await fetchSecretSauce()
//       dispatch(makeASandwich(forPerson, sauce))
//       return Promise.resolve(sauce) 
//     } catch (error) {
//       dispatch(apologize('The Sandwich Shop', forPerson, error))
//       return Promise.reject(error)
//     }
//   };
// }
