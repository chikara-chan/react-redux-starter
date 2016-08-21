import { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import TabContent from './TabContent';
import { SHOW_DANGER, SHOW_WARN, SHOW_REJECT, SHOW_TIMEOUT } from '../constants/PrimaryOrderTypes.js';

class MainSection extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeKey: 0,
            primaryOrderType: SHOW_DANGER
        };
    }

    _onSelect(eventKey) {
        this.setState({activeKey: eventKey});
    }

    _onClick(primaryOrderType) {
        const { actions } = this.props;
        actions.getOrder(primaryOrderType);
        this.setState({primaryOrderType});
        this.refs.tabContent.setState({activeKey: 0});
    }

    render() {
        const { orders, actions } = this.props,
            { activeKey, primaryOrderType } = this.state,
            entries = [{
                primaryOrderType: SHOW_DANGER,
                text: '高危订单'
            }, {
                primaryOrderType: SHOW_WARN,
                text: '预警订单'
            }, {
                primaryOrderType: SHOW_REJECT,
                text: '已拒单'
            }, {
                primaryOrderType: SHOW_TIMEOUT,
                text: '超时送达'
            },];
        return (
            <section className="main-section">
                <Nav bsStyle="tabs"
                     activeKey={this.state.activeKey}
                     onSelect={this._onSelect.bind(this)}>
                    {entries.map((entry, index) => 
                        <NavItem eventKey={index}
                                 onClick={this._onClick.bind(this, entry.primaryOrderType)}>
                                 {entry.text}
                        </NavItem>
                    )}
                </Nav>
                <TabContent hideCheckbox={activeKey == 0 ? false : true}
                            ref="tabContent"
                            orders={orders}
                            primaryOrderType={primaryOrderType}
                            actions={actions} />
            </section>
        );
    }
}

export default MainSection;