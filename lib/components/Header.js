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

var _Header = require('sass/Header');

var _Header2 = _interopRequireDefault(_Header);

var _avatar = require('assets/avatar.png');

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_PureComponent) {
  (0, _inherits3.default)(Header, _PureComponent);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: _Header2.default.header },
        _react2.default.createElement(
          'div',
          { className: _Header2.default.left },
          _react2.default.createElement(
            'span',
            { className: _Header2.default.span },
            'Boilerplate'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _Header2.default.right },
          _react2.default.createElement(
            'span',
            { className: _Header2.default.description },
            'Hello, world\uFF01'
          ),
          _react2.default.createElement('img', { className: _Header2.default.img, src: _avatar2.default })
        )
      );
    }
  }]);
  return Header;
}(_react.PureComponent);

exports.default = Header;
module.exports = exports['default'];