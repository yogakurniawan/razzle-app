import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import customMiddleware from 'utils/redux/middleware'
import { loadItem } from 'utils/localStorage'
import reducers from 'reducers'

let userData
if (process.env.BUILD_TARGET === 'client') {
  userData = loadItem('userData')
}

const initStore = (initialState = {
  auth: {
    userData: userData || null
  }
}) => {
  if (process.browser && window.__store) {
    return window.__store
  }

  const middleware = [
    customMiddleware,
    thunk
  ]

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
