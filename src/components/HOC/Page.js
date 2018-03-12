import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './Theme'

const page = WrappedComponent => {
  class Page extends Component {
    static async getInitialProps(context) {
      const otherProps = WrappedComponent.getInitialProps
        ? await WrappedComponent.getInitialProps({ ...context })
        : {}

      return {
        ...otherProps
      }
    }

    render() {
      const { initialState, ...rest } = this.props
      return (
        <ThemeProvider theme={theme}>
          <WrappedComponent {...rest} />
        </ThemeProvider>
      )
    }
  }

  return Page
}

export default page