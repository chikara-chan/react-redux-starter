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
    const {actions} = this.props

    return (
      <div className={styles.app}>
        <Header actions={actions}/>
        <Navbar actions={actions}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
