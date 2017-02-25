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

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actions = require('actions');

var _actions2 = _interopRequireDefault(_actions);

var _App = require('sass/App');

var _App2 = _interopRequireDefault(_App);

require('sass/global');

var _Header = require('components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Navbar = require('components/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Main = require('components/Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_PureComponent) {
  (0, _inherits3.default)(App, _PureComponent);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          actions = _props.actions,
          orders = _props.orders;


      return _react2.default.createElement(
        'div',
        { className: _App2.default.app },
        _react2.default.createElement(_Header2.default, { actions: actions }),
        _react2.default.createElement(_Navbar2.default, { actions: actions }),
        _react2.default.createElement(_Main2.default, { actions: actions, orders: orders })
      );
    }
  }]);
  return App;
}(_react.PureComponent);

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { actions: (0, _redux.bindActionCreators)(_actions2.default, dispatch) };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
module.exports = exports['default'];