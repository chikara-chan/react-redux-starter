import { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import TabContent from './TabContent';
import { SHOW_DANGER, SHOW_WARN, SHOW_REJECT, SHOW_TIMEOUT } from '../constants/PrimaryOrderTypes.js';

class MainSection extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { key: '0' };
    }

    _onSelect(key) {
        this.setState({key});
    }

    _onClick(primaryOrderType) {
        const { actions } = this.props;
        this.refs.tabContent.setState({key: '0'});
        actions.getOrder(primaryOrderType);
    }

    render() {
        const { orders, actions } = this.props,
            { key } = this.state;
        let primaryOrderType,
            hideCheckbox = true;
        switch (key) {
            case '0':
                primaryOrderType = SHOW_DANGER;
                hideCheckbox = false;
                break;
            case '1':
                primaryOrderType = SHOW_WARN;
                break;
            case '2':
                primaryOrderType = SHOW_REJECT;
                break;
            case '3':
                primaryOrderType = SHOW_TIMEOUT;
                break;
            default:
                primaryOrderType = SHOW_DANGER;
                hideCheckbox = false;
        }
        return (
            <section className="main-section">
                <Nav bsStyle="tabs" activeKey={this.state.key} onSelect={this._onSelect.bind(this)}>
                    <NavItem eventKey="0" onClick={this._onClick.bind(this, SHOW_DANGER)}>高危订单</NavItem>
                    <NavItem eventKey="1" onClick={this._onClick.bind(this, SHOW_WARN)}>预警订单</NavItem>
                    <NavItem eventKey="2" onClick={this._onClick.bind(this, SHOW_REJECT)}>已拒单</NavItem>
                    <NavItem eventKey="3" onClick={this._onClick.bind(this, SHOW_TIMEOUT)}>超时送达</NavItem>
                </Nav>
                <TabContent hideCheckbox={hideCheckbox} ref="tabContent" primaryOrderType={primaryOrderType} orders={orders} actions={actions} />
            </section>
        );
    }
}

export default MainSection;