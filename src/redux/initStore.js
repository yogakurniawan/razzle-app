import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

const initStore = (initialState = {}) => {
  if (process.browser && window.__store) {
    return window.__store
  }

  const middleware = []

  const enhancers = [
    applyMiddleware(...middleware),
  ];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production'
      ? composeWithDevTools : compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers)
  )

  if (process.browser) {
    window.__store = store
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}

export default initStore
