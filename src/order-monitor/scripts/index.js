import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './containers/App';
import Common from '../../common/scripts/common';

const rootElement = document.getElementById('root');

render(
	<Common>
  		<Provider store={store}>
  		  	<App/>
  		</Provider>
  	</Common>,
  	rootElement
);
