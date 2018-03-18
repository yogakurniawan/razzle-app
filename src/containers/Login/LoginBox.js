import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-styled-flexboxgrid'
import { Button } from 'components/Button'
import {
  Input,
  InputGroup,
  InputGroupText,
  InputGroupPrepend
} from 'components/Forms/Input'
import { User, Lock } from 'components/Icon'

const Box = styled(Col) `
  border: 2px solid mediumseagreen;
  min-height: 400px;
  border-radius: .25rem;
`

const StyledButton = styled(Button) `
  width: 30%;
`

const Div = styled.div`
  margin: 10px auto;
  text-align: ${props => props.align ? props.align : 'inherit'};
`

const Container = styled.div`
  padding: 1.5rem 0;
  background-color: #f1f1f1;
`

const LoginBox = styled(Row) `
  padding-bottom: 1rem;
  border-bottom: 1px solid #e4e4e4;
`

const SignupBox = styled(Row) `
  padding-top: 1rem;
`

const Question = styled.span `
  line-height: 3;
`

export default function LogoBar() {
  return (
    <Container>
      <Row center="xs">
        <Box lg={6} md={6} sm={8} xs={10}>
          <LoginBox center="xs">
            <Col lg={6} md={6} sm={8} xs={10}>
              <h1>LOGIN</h1>
              <Div>
                <InputGroup>
                  <InputGroupPrepend>
                    <InputGroupText>
                      <User />
                    </InputGroupText>
                  </InputGroupPrepend>
                  <Input type="text" id="username" placeholder="username" />
                </InputGroup>
              </Div>
              <Div>
                <InputGroup>
                  <InputGroupPrepend>
                    <InputGroupText>
                      <Lock />
                    </InputGroupText>
                  </InputGroupPrepend>
                  <Input type="password" id="password" placeholder="password" />
                </InputGroup>
              </Div>
              <Div align="right">
                <StyledButton color="main" outline>Login</StyledButton>
              </Div>
            </Col>
          </LoginBox>
          <SignupBox center="xs">
            <Col lg={4} md={4} sm={6} xs={7}>
              <Div align="left">
                <Question>
                  Don't have an Account?
                </Question>
              </Div>
            </Col>
            <Col lg={2} md={2} sm={2} xs={3}>
              <Div align="right">
                <Button color="main" outline>Register</Button>
              </Div>
            </Col>
          </SignupBox>
        </Box>
      </Row>
    </Container>
  );
}