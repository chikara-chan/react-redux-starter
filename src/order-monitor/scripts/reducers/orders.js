import { ADD_ORDER, DELETE_ORDER } from '../constants/ActionTypes';

const initialState = [
  {
    id: 1,
    text: 'Use Redux'
  },
  {
    id: 2,
    text: 'Use Flux'
  }
];

export default function orders(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER:
      return [
        {
          id: state.reduce((maxId, order) => Math.max(maxId, order.id), 0) + 1,
          text: action.text
        }, 
        ...state
      ];

    case DELETE_ORDER:
      return state.filter(order =>
        order.id !== action.id
      );

    default:
      return state;
  }
}
