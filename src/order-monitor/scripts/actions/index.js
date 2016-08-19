import * as types from '../constants/ActionTypes';

export function addOrder(text) {
  return { type: types.ADD_ORDER, text }
};

export function deleteOrder(id) {
  return { type: types.DELETE_ORDER, id }
};

// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState()

//     if (counter % 2 === 0) {
//       return
//     }

//     dispatch(increment())
//   }
// }

// export function incrementAsync(delay = 1000) {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(increment())
//     }, delay)
//   }
// }
