import React, { Component, PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import TabContent from './TabContent';

class MainSection extends Component {
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
            <section className="main-section">
                <Nav bsStyle="tabs" activeKey={this.state.key} onSelect={this._onSelect.bind(this)}>
                    <NavItem eventKey="1">高危订单</NavItem>
                    <NavItem eventKey="2">预警订单</NavItem>
                    <NavItem eventKey="3">已拒单</NavItem>
                    <NavItem eventKey="4">超时送达</NavItem>
                </Nav>
                <TabContent orders={orders} actions={actions} />
            </section>
        );
    }
}

export default MainSection;