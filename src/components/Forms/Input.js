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

export const InputGroup = styled.div `
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  &> ${Input} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
  }
`

export const InputGroupText = styled.div `
  display: flex;
  align-items: center;
  padding: ${themeProp('inputPaddingY')} ${themeProp('inputPaddingX')};
  margin-bottom: 0;
  font-size: ${themeProp('fontSizeBase')};
  font-weight: 400;
  line-height: 1.5;
  color: ${themeProp('inputColor')};
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: ${themeProp('inputBorderWidth')} solid ${themeProp('inputBorderColor')};
  border-radius: ${themeProp('inputBorderRadius')};
`

export const InputGroupPrepend = styled.div `
  margin-right: -1px;
  display: flex;
  &> ${InputGroupText} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`