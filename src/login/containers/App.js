import React, {PureComponent} from 'react'
import 'antd/lib/style/css'
import 'layout/sass/global'
import styles from '../sass/App'
import MainSection from '../components/MainSection'

class App extends PureComponent {
  render() {
    return (
      <div className={styles.app}>
        <MainSection/>
      </div>
    )
  }
}

export default App
