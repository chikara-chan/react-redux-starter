import React from 'react'
import styles from '../sass/Main'

function Main(props) {
  const {children} = props

  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default Main
