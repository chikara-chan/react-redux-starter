import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FormSection from '../components/FormSection';
import * as TodoActions from '../actions';

class App extends Component {
  render() {
    // const { todos, actions } = this.props;
    return (
      <div>
      	<FormSection></FormSection>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App);
