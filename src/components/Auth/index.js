import React from 'react'
import PropTypes from 'prop-types'
import Page from 'components/HOC/Page'
import LogoBar from './LogoBar'
import { StyledGrid } from './Styled'
import Footer from './Footer'

function Auth({ form }) {
  const FormComponent = form
  const authForm = (<FormComponent />)
  return (
    <div>
      <LogoBar />
      <StyledGrid fluid>
        { authForm }
      </StyledGrid>
      <Footer />
    </div>
  );
}

Auth.propTypes = {
  authForm: PropTypes.func.isRequired
}

Auth.defaultProps = {
  authForm: () => <div></div>
}

export default Page(Auth)