import types from 'constants/ActionTypes'
import ajax from 'shared/ajax'

function replaceOrders(orders) {
  return {
    type: types.REPLACE_ORDERS,
    orders
  }
}

function fetchOrders() {
  return dispatch => {
    ajax({
      url: '/api',
      type: 'get'
    }).then(res => {
      dispatch(replaceOrders(res))
    })
  }
}

export default {
  fetchOrders
}
