import React, { Component, PropTypes } from 'react';
import { Checkbox } from 'react-bootstrap';
import OrderListItem from './OrderListItem';

class OrderList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { orders, actions } = this.props;
        return (
            <section className="order-list">
            	<div>共23笔订单<Checkbox inline>未催单</Checkbox><Checkbox inline>已催单</Checkbox></div>
		        <ul className="todo-list">
		          {orders.map(order =>
		            <OrderListItem key={order.id} order={order} />
		          )}
		        </ul>
            </section>
        );
    }
}

export default OrderList;