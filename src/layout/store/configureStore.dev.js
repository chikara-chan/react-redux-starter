import {applyMiddleware, compose, createStore} from 'redux'
import {persistState} from 'redux-devtools'
import thunk from 'redux-thunk'
import DevTools from '../containers/DevTools'

export default function configureStore(rootReducer, preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      DevTools.instrument(),
      persistState(
        window.location.href.match(
          /[?&]debug_session=([^&#]+)/
        )
      )
    )
  )

  return store
}
