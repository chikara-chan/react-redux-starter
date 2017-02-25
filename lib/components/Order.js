'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Order = require('sass/Order');

var _Order2 = _interopRequireDefault(_Order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Order = function (_PureComponent) {
  (0, _inherits3.default)(Order, _PureComponent);

  function Order() {
    (0, _classCallCheck3.default)(this, Order);
    return (0, _possibleConstructorReturn3.default)(this, (Order.__proto__ || (0, _getPrototypeOf2.default)(Order)).call(this));
  }

  (0, _createClass3.default)(Order, [{
    key: 'render',
    value: function render() {
      var order = this.props.order;


      return _react2.default.createElement(
        'div',
        { className: _Order2.default.order },
        order.name
      );
    }
  }]);
  return Order;
}(_react.PureComponent);

exports.default = Order;
module.exports = exports['default'];