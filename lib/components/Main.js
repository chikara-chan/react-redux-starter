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

var _Main = require('sass/Main');

var _Main2 = _interopRequireDefault(_Main);

var _Order = require('components/Order');

var _Order2 = _interopRequireDefault(_Order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function (_PureComponent) {
  (0, _inherits3.default)(Main, _PureComponent);

  function Main() {
    (0, _classCallCheck3.default)(this, Main);
    return (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this));
  }

  (0, _createClass3.default)(Main, [{
    key: 'handleClick',
    value: function handleClick(d) {
      console.log(d);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var orders = this.props.orders;


      return _react2.default.createElement(
        'main',
        { className: _Main2.default.main },
        orders.map(function (order) {
          return _react2.default.createElement(_Order2.default, { order: order, key: order.id, onClick: _this2.handleClick });
        })
      );
    }
  }]);
  return Main;
}(_react.PureComponent);

exports.default = Main;
module.exports = exports['default'];