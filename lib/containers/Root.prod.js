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

var _reactRedux = require('react-redux');

var _App = require('containers/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function (_PureComponent) {
  (0, _inherits3.default)(Root, _PureComponent);

  function Root() {
    (0, _classCallCheck3.default)(this, Root);
    return (0, _possibleConstructorReturn3.default)(this, (Root.__proto__ || (0, _getPrototypeOf2.default)(Root)).call(this));
  }

  (0, _createClass3.default)(Root, [{
    key: 'render',
    value: function render() {
      var store = this.props.store;


      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_App2.default, null)
      );
    }
  }]);
  return Root;
}(_react.PureComponent);

exports.default = Root;
module.exports = exports['default'];