import React, {PureComponent} from 'react'
import styles from 'sass/Navbar'

class Navbar extends PureComponent {
  constructor() {
    super()
  }

  render() {
    return (
      <nav className={styles.navbar}>
      </nav>
    )
  }
}

export default Navbar
