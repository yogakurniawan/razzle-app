import React from 'react'
import styled from 'styled-components'
// import { Row, Col } from 'react-styled-flexboxgrid'
import Logo from './Logo'

const Div = styled.div `
  text-align: center; 
  padding: 1.2rem;
  border-bottom: 1px solid #e4e4e4;
`

export default function LogoBar() {
  return (
    <Div>
      <Logo />
    </Div>
  );
}