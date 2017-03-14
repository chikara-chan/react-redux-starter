import React from 'react'
import 'antd/lib/style/css'
import '../sass/global'
import styles from '../sass/Layout'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

function Layout(props) {
  const {children} = props

  return (
    <div className={styles.layout}>
      <Header />
      <Navbar />
      <Main>
        {children}
      </Main>
    </div>
  )
}

export default Layout
