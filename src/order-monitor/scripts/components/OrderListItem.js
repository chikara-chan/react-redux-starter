import React, { Component, PropTypes } from 'react';
import { Checkbox } from 'react-bootstrap';

class OrderListItem extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { order }=this.props;
        return (
            <li className="order-list-item">
            	{order.text}
            </li>
        );
    }
}

export default OrderListItem;