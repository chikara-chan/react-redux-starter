import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

export default function configureStore(rootReducer, preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )

  return store
}
