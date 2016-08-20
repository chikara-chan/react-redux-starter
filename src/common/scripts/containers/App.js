import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

class App extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="app">
            	<Header/>
            	<MainSection>{children}</MainSection>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        alert: state.alert
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps, 
	mapDispatchToProps
)(App);
