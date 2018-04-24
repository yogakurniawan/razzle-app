import React from 'react'
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid'
import {
  Input,
  InputGroup,
  InputGroupText,
  InputGroupPrepend
} from 'components/Forms/Input'
import { User, Lock } from 'components/Icon'
import {
  Container,
  SubContainer,
  TopContainer,
  Div,
  StyledButton,
  StyledButtonLink,
  BottomContainer,
  Question
} from './AuthStyles'

export default function AuthForm({ authType, onSubmit }) {
  const title = authType === 'signin' ? 'Sign In' : 'Sign Up'
  const authButtonText = authType === 'signin' ? 'Sign Up' : 'Sign In'
  const authDirection = authType === 'signin' ? 'signup' : 'signin'
  const question = authType === 'signin' ? 'Don\'t have an Account?' : 'Already have an Account?'
  return (
    <Container>
      <Row center="xs">
        <SubContainer lg={4} md={8} sm={8} xs={10}>
          <TopContainer center="xs">
            <Col lg={8} md={6} sm={8} xs={10}>
              <h1>{ title }</h1>
              <form onSubmit={onSubmit}>
                <Div>
                  <InputGroup>
                    <InputGroupPrepend>
                      <InputGroupText>
                        <User />
                      </InputGroupText>
                    </InputGroupPrepend>
                    <Input type="text" id="username" placeholder="Username" />
                  </InputGroup>
                </Div>
                <Div>
                  <InputGroup>
                    <InputGroupPrepend>
                      <InputGroupText>
                        <Lock />
                      </InputGroupText>
                    </InputGroupPrepend>
                    <Input type="password" id="password" placeholder="Password" />
                  </InputGroup>
                </Div>
                <Div align="right">
                  <StyledButton type="submit" color="primary">{ title }</StyledButton>
                </Div>
              </form>
            </Col>
          </TopContainer>
          <BottomContainer center="xs">
            <Col lg={5} md={4} sm={5} xs={6}>
              <Div align="left">
                <Question>
                  { question }
                </Question>
              </Div>
            </Col>
            <Col lg={3} md={2} sm={3} xs={4}>
              <Div align="right">
                <StyledButtonLink to={`/${authDirection}`} color="primary">{ authButtonText }</StyledButtonLink>
              </Div>
            </Col>
          </BottomContainer>
        </SubContainer>
      </Row>
    </Container>
  )
}

AuthForm.propTypes = {
  authType: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

AuthForm.defaultProps = {
  authType: 'signin',
  onSubmit: () => {}
}