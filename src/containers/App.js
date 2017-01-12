import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import actions from '../actions'
import styles from '../sass/App'
import '../sass/global'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={styles.app}>
                <Header/>
                <Navbar/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {userInfo: state.userInfo}
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
