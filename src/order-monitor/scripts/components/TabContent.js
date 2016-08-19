import React, { Component, PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import OrderList from './OrderList';

class TabContent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { key: '1' };
    }

    _onSelect(key) {
        this.setState({key});
    }

    render() {
        const { orders, actions } = this.props;
        return (
            <section className="tab-content">
                <Nav bsStyle="pills" activeKey={this.state.key} onSelect={this._onSelect.bind(this)}>
                    <NavItem eventKey="1">全部</NavItem>
                    <NavItem eventKey="2">超50分钟未送达</NavItem>
                    <NavItem eventKey="3">超7分钟配送员未领单</NavItem>
                    <NavItem eventKey="4">超25分钟未发货</NavItem>
                </Nav>
                <OrderList orders={orders} actions={actions} />
            </section>
        );
    }
}

export default TabContent;