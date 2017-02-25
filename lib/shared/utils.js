'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param  {Object} options
 * @return {Object}         Return Promise
 */
function ajax(options) {
  var defaults = {
    url: null,
    type: 'post',
    data: {}
  };
  var promise = void 0,
      action = void 0;

  options = (0, _assign2.default)({}, defaults, options);
  promise = _superagent2.default[options.type](options.url).withCredentials();
  (0, _keys2.default)(options).forEach(function (key) {
    if (!key.match(/url|type|data/)) {
      promise.set(key, options[key]);
    }
  });
  action = options.type === 'get' ? 'query' : 'send';

  return new _promise2.default(function (resolve) {
    promise[action](options.data).then(function (res) {
      resolve(res.body);
    }).catch(function (err) {
      console.log(err);
    });
  });
}

exports.default = { ajax: ajax };
module.exports = exports['default'];