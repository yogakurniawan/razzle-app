import React from 'react'
import styled from 'styled-components'

const Div = styled.div `
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #fff;
  text-align: center;
`

export default function Footer() {
  return (
    <Div>
      Copyright @2018. Yoga Kurniawan
    </Div>
  );
}