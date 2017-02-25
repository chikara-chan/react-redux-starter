'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionTypes = require('constants/ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _utils = require('shared/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function replaceOrders(orders) {
  return {
    type: _ActionTypes2.default.REPLACE_ORDERS,
    orders: orders
  };
}

function fetchOrders() {
  return function (dispatch) {
    _utils2.default.ajax({
      url: '/api/user/fetchOrders',
      type: 'get'
    }).then(function (res) {
      dispatch(replaceOrders(res));
    });
  };
}

exports.default = { fetchOrders: fetchOrders };
module.exports = exports['default'];