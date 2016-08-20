import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import Common from '../../common/scripts/common';

const store = configureStore();
const rootElement = document.getElementById('root');

render(
	<Common>
  		<Provider store={store}>
  		  	<App/>
  		</Provider>
  	</Common>,
  	rootElement
);
