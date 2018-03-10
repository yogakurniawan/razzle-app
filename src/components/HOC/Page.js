import React, { Component } from 'react'

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
        <WrappedComponent {...rest} />
      )
    }
  }

  return Page
}

export default page