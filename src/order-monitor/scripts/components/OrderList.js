import { Component } from 'react';
import { Checkbox } from 'react-bootstrap';
import classnames from 'classnames';
import OrderListItem from './OrderListItem';
import { SHOW_ALL, SHOW_WILL, SHOW_DID } from '../constants/OrderFilters';

const orderFilters = {
    [SHOW_ALL]: order => true,
    [SHOW_WILL]: order => {
        return true;
    },    
    [SHOW_DID]: order => {
        return false;
    }
};

const changeState = {
    [SHOW_ALL]: function() {
        this.setState({ 
            filter: SHOW_ALL,
            willChecked: false,
            didChecked: false
        });
    },
    [SHOW_WILL]: function() {
        this.setState({ 
            filter: SHOW_WILL,
            willChecked: true,
            didChecked: false
        });
    },    
    [SHOW_DID]: function() {
        this.setState({ 
            filter: SHOW_DID,
            willChecked: false,
            didChecked: true
        });
    }
};

class OrderList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            filter: SHOW_ALL,
            willChecked: false,
            didChecked: false
        };
    }

    _onClick(type) {
        if(this.state[type] == true) {
            changeState[SHOW_ALL].call(this)
        } else {
            changeState[type].call(this);
        }
    }

    render() {
        const { orders, actions, hideCheckbox } = this.props,
            { filter, willChecked, didChecked } = this.state;
        return (
            <div className="order-list">
            	<div>
                    共23笔订单
                    <Checkbox className={classnames({hide: hideCheckbox})}
                              checked={willChecked}
                              onClick={this._onClick.bind(this, SHOW_WILL)}
                              inline>未催单</Checkbox>
                    <Checkbox className={classnames({hide: hideCheckbox})}
                              checked={didChecked}
                              onClick={this._onClick.bind(this, SHOW_DID)}
                              inline>已催单</Checkbox>
                </div>
		        <ul className="todo-list">
		            {orders.filter(orderFilters[filter]).map(order =>
		                <OrderListItem key={order.id} order={order} />
		            )}
		        </ul>
            </div>
        );
    }
}

export default OrderList;