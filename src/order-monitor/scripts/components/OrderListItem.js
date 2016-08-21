import { Component } from 'react';
import { Checkbox, Button, Modal } from 'react-bootstrap';

class OrderListItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false
        };
    }

    _closeModal() {
        this.setState({ 
            showModal: false 
        });
    }

    _openModal() {
        this.setState({ 
            showModal: true 
        });
    }

    render() {
        const { order }=this.props;
        return (
            <li className="order-list-item">
            	{order.text}
                <Button onClick={this._openModal.bind(this)}>
                    查看进度
                </Button>
                <Modal show={this.state.showModal}
                       onHide={this._closeModal.bind(this)}>
                    hello
                </Modal>
            </li>
        );
    }
}

export default OrderListItem;