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
import Alert from 'components/Alert'
import { User, Lock } from 'components/Icon'
import Spinner from 'components/Spinner'
import {
  Container,
  SubContainer,
  TopContainer,
  Div,
  StyledButton,
  StyledButtonLink,
  BottomContainer,
  Question
} from './Styled'

export default class AuthForm extends Component {
  state = {
    alertTitle: null,
    showAlert: false,
    alertMessage: null,
    error: null
  }

  setAlertInfo = (alertTitle, alertMessage) => {
    this.setState({
      alertTitle,
      alertMessage
    });
  }

  toggleShowAlert = (error) => {
    this.setState({
      showAlert: !this.state.showAlert,
      error: error || null
    });
  }

  onConfirm = () => {
    const { authType, history } = this.props
    const { error } = this.state
    if (!error && authType === 'signup') {
      history.push('/signin')
    }
  }

  render() {
    const { authType, onSubmit, history } = this.props
    const { alertMessage, showAlert, alertTitle } = this.state
    const title = authType === 'signin' ? 'Sign In' : 'Sign Up'
    const authButtonText = authType === 'signin' ? 'Sign Up' : 'Sign In'
    const authDirection = authType === 'signin' ? 'signup' : 'signin'
    const question = authType === 'signin' ? 'Don\'t have an Account?' : 'Already have an Account?'
    return (
      <Container>
        <Alert
          title={alertTitle}
          confirmButtonText="OK"
          isOpen={showAlert}
          onConfirm={this.onConfirm}
          onRequestClose={this.toggleShowAlert}>
          {alertMessage && alertMessage.split('.').map(msg => <p key={msg}>{msg}</p>)}
        </Alert>
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
                  let errors = {}
                  const emailIsValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                  if (!values.email || !emailIsValid) {
                    errors.email = 'Please provide a valid Email'
                  }
                  if (!values.password) {
                    errors.password = 'Please provide a Password'
                  }
                  return errors
                }}
                onSubmit={async (values, actions) => {
                  try {
                    await onSubmit(values)
                    actions.setSubmitting(false)
                    if (authType === 'signin') {
                      history.push('/')
                    } else {
                      this.setAlertInfo('INFO', 'New user has been successfully registered. Signin Now!')
                      this.toggleShowAlert()
                    }
                  } catch (error) {
                    this.setAlertInfo('ERROR', error.message)
                    this.toggleShowAlert(error)
                    actions.setSubmitting(false)
                  }
                }}
                render={({
                  errors,
                  touched,
                  isSubmitting
                }) => {
                  return (
                    <Form>
                      <Div>
                        <InputGroup>
                          <InputGroupPrepend>
                            <InputGroupText>
                              <User />
                            </InputGroupText>
                          </InputGroupPrepend>
                          <Input state={touched.email && errors.email ? 'invalid' : 'valid'} name="email" type="text" id="email" placeholder="Email" />
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
                          <Input state={touched.password && errors.password ? 'invalid' : 'valid'} name="password" type="password" id="password" placeholder="Password" />
                          {touched.password && errors.password && <InvalidFeedback>{errors.password}</InvalidFeedback>}
                        </InputGroup>
                      </Div>
                      <Div align="right">
                        <StyledButton type="submit" color="primary">
                          {isSubmitting && <Spinner height={20} width={20} />}
                          {!isSubmitting && title}
                        </StyledButton>
                      </Div>
                    </Form>
                  )
                }}
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