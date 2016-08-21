import { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as actions from '../actions';

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }

    _closeModal() {
        actions.hideAlert();
    }

    render() {
        const { alert, children } = this.props;
        return (
            <div className="root">
            	<Header />
            	<MainSection>{children}</MainSection>
                <Modal show={alert.show}
                       onHide={this._closeModal.bind(this)}>
                       {alert.text}
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        alert: state.alert
    };
}

export default connect(
    mapStateToProps
)(App);
