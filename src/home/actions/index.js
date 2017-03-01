import types from '../constants/ActionTypes'
import ajax from 'shared/ajax'
import api from 'shared/api'

function replaceOrders(orders) {
  return {
    type: types.REPLACE_ORDERS,
    orders
  }
}

function fetchOrders() {
  return dispatch => {
    ajax({
      url: api.queryOrders,
      type: 'get'
    }).then(res => {
      dispatch(replaceOrders(res))
    })

    const mock = []

    for (let i = 1; i < 10; i++) {
      mock.push({
        id: i,
        name: `订单${i}`
      })
    }

    dispatch(replaceShops(mock))
  }
}

export default {
  fetchOrders
}
