import { Component } from 'react';
import { Checkbox } from 'react-bootstrap';
import classnames from 'classnames';
import OrderListItem from './OrderListItem';

class OrderList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeIndex: -1
        };
    }

    _onClick(index) {
        if(index == this.state.activeIndex){
            this.setState({
                activeIndex: -1
            });
        } else {
            this.setState({
                activeIndex: index,
            });
        }
    }

    render() {
        const { orders, actions, hideCheckbox } = this.props,
            { activeIndex } = this.state,
            entries = [{
                text: '未催单'
            }, {
                text: '已催单'
            }];
        return (
            <div className="order-list">
            	<div>
                    共23笔订单
                    {entries.map((entry, index) => {
                        return (
                            <Checkbox className={classnames({hide: hideCheckbox})}
                                      checked={this.state.activeIndex == index ? true: false}
                                      onClick={this._onClick.bind(this, index)}
                                      inline>
                                      {entry.text}
                            </Checkbox>
                        );
                    })}
                </div>
		        <ul className="todo-list">
		            {orders.filter(order => {
                        switch (activeIndex) {
                            case -1:
                                return true;
                            case 0:
                                return true;
                            case 1:
                                return false;
                        }    
                    }).map(order => 
                        <OrderListItem order={order} />
		            )}
		        </ul>
            </div>
        );
    }
}

export default OrderList;