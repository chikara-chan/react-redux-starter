import React from 'react'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import DevTools from './DevTools'
import Layout from './Layout'

function Root(props) {
  const {store, children} = props

  return (
    <AppContainer>
      <Provider store={store}>
        <div>
          <Layout>{children}</Layout>
          <DevTools />
        </div>
      </Provider>
    </AppContainer>
  )
}

export default Root
