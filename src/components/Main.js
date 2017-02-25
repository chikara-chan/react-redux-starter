import React, {PureComponent} from 'react'
import styles from '../sass/Main'
import Order from './Order'

class Main extends PureComponent {
  constructor() {
    super()
  }

  render() {
    const {orders} = this.props

    return (
      <main className={styles.main}>
        {orders.map(order =>
          <Order order={order} key={order.id}/>
        )}
      </main>
    )
  }
}

export default Main
