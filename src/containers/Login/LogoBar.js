import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-styled-flexboxgrid'
import Logo from './Logo'

const StyledRow = styled(Row) `
  padding: 1.2rem;
`

export default function LogoBar() {
  return (
    <StyledRow center="xs">
      <Col xs={12}>
        <Logo />
      </Col>
    </StyledRow>
  );
}