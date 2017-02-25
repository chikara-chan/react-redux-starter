import {combineReducers} from 'redux'
import types from '../constants/ActionTypes'

const initialOrders = [
  {
    id: '1',
    name: '订单1'
  },
  {
    id: '2',
    name: '订单2'
  },
  {
    id: '3',
    name: '订单3'
  }
]

function orders(state = initialOrders, action) {
  switch (action.type) {
    case types.REPLACE_ORDERS:
      return action.orders
    default:
      return state
  }
}

export default combineReducers({orders})
