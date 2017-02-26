import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './containers/App'

render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App')

    render(
    <AppContainer>
      <NextApp/>
    </AppContainer>,
      document.getElementById('root')
    )
  })
}
