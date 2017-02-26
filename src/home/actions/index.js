import types from '../constants/ActionTypes'
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
      url: '/api/user/fetchOrders',
      type: 'get'
    }).then(res => {
      dispatch(replaceOrders(res))
    })

    const mock = [{
      id: 1,
      name: '订单1'
    }, {
      id: 2,
      name: '订单2'
    }, {
      id: 3,
      name: '订单3'
    }]

    dispatch(replaceOrders(mock))
  }
}

export default {
  fetchOrders
}
