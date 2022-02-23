import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import appReducer from './modules/app/reducers'
import blogReducer from './modules/blog/reducers'
import personalAccountReducer from './modules/personalAccount/reducers'
import commonReducer from './reducers'
// import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
// import rootSaga from './sagas'

// let reducers = combineReducers({
//     appReducer,
//     reducer
// });
// let reducers = combineReducers({
//     appReducer:appReducer,
//     commonReducer:commonReducer,
// });
let reducers = combineReducers({
    appReducer,
    personalAccountReducer,
    blogReducer,
    commonReducer,
});

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
    reducers,
    // appReducer,
    initialState,
    composeEnhancers(...enhancers),
    // composeEnhancers(compose()),
  )

  // Extensions
  // store.runSaga = sagaMiddleware.run
  // store.runSaga(rootSaga)

  return store
}
