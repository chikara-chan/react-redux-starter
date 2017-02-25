'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _ActionTypes = require('constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialOrders = [{
  id: '1',
  name: '订单1'
}, {
  id: '2',
  name: '订单2'
}, {
  id: '3',
  name: '订单3'
}];

function orders() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialOrders;
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes2.default.REPLACE_ORDERS:
      return action.orders;
    default:
      return state;
  }
}

exports.default = (0, _redux.combineReducers)({ orders: orders });
module.exports = exports['default'];