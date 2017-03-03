import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from 'actions'
import 'sass/global'
import styles from 'sass/App'
import Header from 'components/Header'
import Navbar from 'components/Navbar'
import Main from 'components/Main'

class App extends PureComponent {
  render() {
    const {actions, orders} = this.props

    return (
      <div className={styles.app}>
        <Header actions={actions}/>
        <Navbar actions={actions}/>
        <Main actions={actions} orders={orders}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
