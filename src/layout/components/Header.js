import React from 'react'
import styles from '../sass/Header'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <a className={styles.link} href="/">Boilerplate</a>
      </div>
      <div className={styles.right}>
      </div>
    </header>
  )
}

export default Header
