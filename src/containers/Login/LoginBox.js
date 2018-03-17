import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-styled-flexboxgrid'
import { Button } from 'components/Button'
import { Input } from 'components/Forms'

const StyledRow = styled(Row) `
  padding: 1.2rem;
  background-color: #f1f1f1;
`

const StyledCol = styled(Col) `
  border: 2px solid mediumseagreen;
  min-height: 400px;
  border-radius: .25rem;
`

const Div = styled.div `
  margin: 10px auto;
`

export default function LogoBar() {
  return (
    <StyledRow center="xs">
      <StyledCol lg={6} md={6} sm={8} xs={10}>
        <Row center="xs">
          <Col lg={6} md={6} sm={8} xs={10}>
            <h1>LOGIN</h1>
            <Div>
              <Input type="text" id="username" placeholder="username" />
            </Div>
            <Div>
              <Input type="password" id="password" placeholder="password" />
            </Div>
            <Button color="main" outline>Login</Button>
          </Col>
        </Row>
      </StyledCol>
    </StyledRow>
  );
}