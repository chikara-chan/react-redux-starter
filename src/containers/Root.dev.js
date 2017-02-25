import React, {PureComponent} from 'react'
import {Provider} from 'react-redux'
import DevTools from 'containers/DevTools'
import App from 'containers/App'

class Root extends PureComponent {
  render() {
    const {store} = this.props

    return (
      <Provider store={store}>
        <div>
          <App/>
          <DevTools/>
        </div>
      </Provider>
    )
  }
}

export default Root
