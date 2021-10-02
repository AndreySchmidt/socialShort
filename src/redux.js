import {createStore, combineReducers} from "redux";

let reducers = combineReducers({
    f,s,th
});

let store = new createStore(reducers);

export default store;


import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './../articles/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './../articles/sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
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
  store.runSaga = sagaMiddleware.run
  store.runSaga(rootSaga)
  // store.injectedReducers = {} // Reducer registry
  // store.injectedSagas = {} // Saga registry

  return store
}
