import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, cleanup } from 'react-testing-library'
import Navbar from '../index'

function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

test('Navbar burger has state inactive', () => {
  const logout = jest.fn()
  const { container } = renderWithRouter(<Navbar logout={logout} />)
  expect(container).toMatchSnapshot()
})