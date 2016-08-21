import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './containers/App';

class Common extends Component {
    render() {
    	const { children } = this.props;
        return (
  			<Provider store={store}>
  				<App>{children}</App>
  			</Provider>
        );
    }
}

export default Common;