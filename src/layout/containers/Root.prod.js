import React from 'react'
import {Provider} from 'react-redux'
import Layout from './Layout'

function Root(props) {
  const {store, children} = props

  return (
    <Provider store={store}>
      <Layout>{children}</Layout>
    </Provider>
  )
}

export default Root
