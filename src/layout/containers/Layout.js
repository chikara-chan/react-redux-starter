import React from 'react'
import 'antd/lib/style/css'
import '../sass/global'
import styles from '../sass/Layout'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

function Layout(props) {
  const {actions, orders, children} = props

  return (
    <div className={styles.common}>
      <Header actions={actions}/>
      <Navbar actions={actions}/>
      <Main actions={actions} orders={orders}>
        {children}
      </Main>
    </div>
  )
}

export default Layout
