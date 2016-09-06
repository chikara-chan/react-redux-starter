import { Component } from 'react';
import { Provider } from 'react-redux';
import CommonRoot from '../../../common/scripts/containers/Root';
import App from './App';

class Root extends Component {
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <CommonRoot>
                    <App/>
                    <DevTools />
                </CommonRoot>
            </Provider>
        );
    }
};

export default Root;
