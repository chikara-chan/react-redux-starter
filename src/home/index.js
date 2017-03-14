import React from 'react'
import {render} from 'react-dom'
import configureStore from '../layout/store/configureStore'
import Layout from '../layout/containers/Root'
import reducers from './reducers'
import App from './containers/App'

const store = configureStore(reducers)

render(
  <Layout store={store}>
    <App />
  </Layout>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('../layout/containers/Root', () => {
    const NextLayout = require('../layout/containers/Root')

    render(
      <NextLayout store={store}>
        <App />
      </NextLayout>,
      document.getElementById('root')
    )
  })
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App')

    render(
      <Layout store={store}>
        <NextApp />
      </Layout>,
      document.getElementById('root')
    )
  })
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers'))
  })
}
