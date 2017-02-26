import React, {PureComponent} from 'react'
import styles from '../sass/Order'
import {Card} from 'antd'

class Order extends PureComponent {
  render() {
    const {order} = this.props

    return (
      <div className={styles.order}>
        <Card className={styles.card} title={order.id}>
          {order.name}
        </Card>
      </div>
    )
  }
}

export default Order
