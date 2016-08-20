import { Component } from 'react';
import { PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class SideBar extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { children } = this.props;
        return (
            <div className="side-bar">
			  	<PanelGroup accordion="true" >
			    	<Panel header="客服管理" defaultActiveKey="0">
					    <ListGroup fill>
                            <ListGroupItem className="active"><a>客服工单管理</a></ListGroupItem>
                            <ListGroupItem><a>赔付订单管理</a></ListGroupItem>
					    </ListGroup>
			    	</Panel>
			  	</PanelGroup>
            </div>
        );
    }
}

export default SideBar;