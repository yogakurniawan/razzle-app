import styled, { css } from 'styled-components';
import { themeProp } from 'utils/theme'

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: ${themeProp('inputPaddingY')}
    ${themeProp('inputPaddingX')};
  font-size: ${themeProp('fontSizeBase')};
  line-height: ${themeProp('inputLineHeight')};
  color: ${themeProp('inputColor')};
  background-color: ${themeProp('inputBg')};
  background-image: none;
  background-clip: padding-box;
  border: ${themeProp('inputBorderWidth')} solid ${themeProp('inputBorderColor')};
  border-radius: ${themeProp('inputBorderRadius')};
  box-shadow: ${themeProp('inputBoxShadow')};
  transition: ${themeProp('inputTransition')};
  &::placeholder {
    color: ${themeProp('inputPlaceholderColor')};
    opacity: 1;
  }
  
  ${props =>
    props.disabled &&
    css`
      background-color: ${themeProp('inputDisabledBg')};
      opacity: 1;
  `}
  
  &:focus {
    color: ${themeProp('inputFocusColor')};
    background-color: ${themeProp('inputFocusBg')};
    border-color: ${themeProp('inputFocusBorderColor')};
    outline: 0;
    box-shadow: ${themeProp('inputFocusBoxShadow')};
  }
`