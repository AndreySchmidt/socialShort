import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
// import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
// import rootSaga from './sagas'

// const sagaMiddleware = createSagaMiddleware()
// const middlewares = [sagaMiddleware]
const middlewares = [thunk]
const enhancers = [applyMiddleware(...middlewares)]

export default function configStore (initialState = {}) {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false }) : compose
  /* eslint-enable */

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(...enhancers),
    // composeEnhancers(compose()),
  )

  // Extensions
  // store.runSaga = sagaMiddleware.run
  // store.runSaga(rootSaga)

  return store
}
