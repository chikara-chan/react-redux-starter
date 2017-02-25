import React, {PureComponent} from 'react'
import styles from 'sass/Main'
import Order from 'components/Order'

class Main extends PureComponent {
  constructor() {
    super()
  }

  handleClick() {
    const {actions} = this.props

    actions.fetchOrders()
  }

  render() {
    const {orders} = this.props

    return (
      <main className={styles.main} onClick={this.handleClick}>
        {orders.map(order =>
          <Order order={order} key={order.id} onClick={this.handleClick}/>
        )}
      </main>
    )
  }
}

export default Main
