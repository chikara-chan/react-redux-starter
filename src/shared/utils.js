import request from 'superagent'

/**
 * @param  {Object} options
 * @return {Object}         Return Promise
 */
function ajax(options) {
  const defaults = {
    url: null,
    type: 'post',
    data: {}
  }
  let promise, action

  options = Object.assign({}, defaults, options)
  promise = request[options.type](options.url).withCredentials()
  Object.keys(options).forEach(key => {
    if (!key.match(/url|type|data/)) {
      promise.set(key, options[key])
    }
  })
  action = options.type === 'get' ? 'query' : 'send'

  return new Promise(resolve => {
    promise[action](options.data).then(res => {
      resolve(res.body)
    }).catch(err => {
      console.log(err)
    })
  })
}

export default {
  ajax
}
