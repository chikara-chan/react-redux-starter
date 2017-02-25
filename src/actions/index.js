import types from '../constants/ActionTypes'
import utils from '../shared/utils'

function replaceOrders(orders) {
  return {
    type: types.REPLACE_ORDERS,
    orders
  }
}

function fetchOrders() {
  return dispatch => {
    utils.ajax({
      url: '/api/user/fetchOrders',
      type: 'get'
    }).then(res => {
      dispatch(replaceOrders(res))
    })
  }
}

export default {fetchOrders}
