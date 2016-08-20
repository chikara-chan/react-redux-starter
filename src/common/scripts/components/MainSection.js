import { Component } from 'react';
import SideBar from './SideBar';

class MainSection extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { children } = this.props;
        return (
            <div className="main">
                <div className="left">
                    <SideBar />
                </div>
                <div className="right">
                    {children}
                </div>
            </div>
        );
    }
}

export default MainSection;