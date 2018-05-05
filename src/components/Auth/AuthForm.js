import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import { Col } from 'react-styled-flexboxgrid'
import {
  Input,
  InvalidFeedback,
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

export default class AuthForm extends Component {

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { authType, onSubmit } = this.props
    const title = authType === 'signin' ? 'Sign In' : 'Sign Up'
    const authButtonText = authType === 'signin' ? 'Sign Up' : 'Sign In'
    const authDirection = authType === 'signin' ? 'signup' : 'signin'
    const question = authType === 'signin' ? 'Don\'t have an Account?' : 'Already have an Account?'
    return (
      <Container>
        <SubContainer lg={5} md={8} sm={8} xs={10}>
          <TopContainer center="xs">
            <Col lg={8} md={6} sm={8} xs={10}>
              <h1>{title}</h1>
              <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                validate={values => {
                  let errors = {};
                  const emailIsValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                  if (!values.emai || !emailIsValid) {
                    errors.email = 'Please provide a valid Email Address';
                  }
                  if (!values.password) {
                    errors.password = 'Please provide a Password'
                  }
                  return errors;
                }}
                onSubmit={values => {
                  onSubmit(values)
                }}
                render={({ values, errors, touched }) => (
                  <Form>
                    <Div>
                      <InputGroup>
                        <InputGroupPrepend>
                          <InputGroupText>
                            <User />
                          </InputGroupText>
                        </InputGroupPrepend>
                        <Input state={errors.email ? 'invalid' : 'valid'} name="email" type="text" id="email" placeholder="Email" />
                        {touched.email && errors.email && <InvalidFeedback>{errors.email}</InvalidFeedback>}
                      </InputGroup>
                    </Div>
                    <Div>
                      <InputGroup>
                        <InputGroupPrepend>
                          <InputGroupText>
                            <Lock />
                          </InputGroupText>
                        </InputGroupPrepend>
                        <Input state={errors.password ? 'invalid' : 'valid'} name="password" type="password" id="password" placeholder="Password" />
                        {touched.password && errors.password && <InvalidFeedback>{errors.password}</InvalidFeedback>}
                      </InputGroup>
                    </Div>
                    <Div align="right">
                      <StyledButton type="submit" color="primary">{title}</StyledButton>
                    </Div>
                  </Form>
                )}
              />
            </Col>
          </TopContainer>
          <BottomContainer center="xs">
            <Col lg={5} md={4} sm={5} xs={6}>
              <Div align="left">
                <Question>
                  {question}
                </Question>
              </Div>
            </Col>
            <Col lg={3} md={2} sm={3} xs={4}>
              <Div align="right">
                <StyledButtonLink to={`/${authDirection}`} color="primary">{authButtonText}</StyledButtonLink>
              </Div>
            </Col>
          </BottomContainer>
        </SubContainer>
      </Container>
    )
  }
}

AuthForm.propTypes = {
  authType: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

AuthForm.defaultProps = {
  authType: 'signin',
  onSubmit: () => { }
}