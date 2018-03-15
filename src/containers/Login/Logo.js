import React from 'react'
import styled from 'styled-components'
import Img from 'components/Img'
import Logo from './stethoscope.png'

const StyledImg = styled(Img)`
  width: 15rem;
  margin: 0 auto;
`;

function StyledLogo(props) {
  return (
    <StyledImg src={Logo} alt="Logo" />
  );
}

export default StyledLogo;