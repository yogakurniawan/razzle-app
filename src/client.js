import { ensureReady, After } from '@jaredpalmer/after'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import initStore from 'redux/initStore'
import routes from './routes'

const store = initStore();

ensureReady(routes).then(data =>
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <After data={data} routes={routes} />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
)

if (module.hot) {
  module.hot.accept()
}
