import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
          applyMiddleware(thunk),
          DevTools.instrument()
        )
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};
