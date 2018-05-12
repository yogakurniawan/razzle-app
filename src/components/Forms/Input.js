import styled, { css } from 'styled-components'
import { Field } from 'formik'
import { themeProp } from 'utils/theme'

export const Input = styled(Field) `
  ${({ theme, state }) =>
    css`
      display: block;
      width: 100%;
      padding: .375rem .75rem;
      font-family: inherit;
      font-size: ${theme['fontSizeBase']};
      line-height: 1.5;
      color: ${theme['inputColor']};
      background-color: ${theme['white']};
      background-image: none;
      background-clip: padding-box;
      border: 1px solid ${state === 'invalid' ? theme['danger'] : theme['inputBorderColor']};
      border-radius: ${theme['inputBorderRadius']};
      box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
      transition: borderColor .15s ease-in-out,boxShadow .15s ease-in-out;
      &::placeholder {
        color: ${theme['inputPlaceholderColor']};
        opacity: 1;
      }
      &:focus {
        outline: 0;
        background-color: ${theme['white']};
        color: ${theme['inputFocusColor']};
        border-color: ${state === 'valid' ? theme['primary'] : theme['danger']};
        box-shadow: ${state === 'valid' ? '0 0 0 0.2rem rgba(0,123,255,.25)' : '0 0 0 0.2rem rgba(220,53,69,.25)'};
      }
    `
  }
  
  ${props => props.disabled &&
    css`
      background-color: ${themeProp('inputDisabledBg')};
      opacity: 1;
  `}
`

export const InvalidFeedback = styled.div`
  text-align: left;
  width: 100%;
  margin-top: .25rem;
  font-size: 80%;
  color: ${themeProp('danger')};
`

export const InputGroup = styled.div`
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

export const InputGroupText = styled.div`
  display: flex;
  align-items: center;
  padding: .375rem .75rem;
  margin-bottom: 0;
  font-size: ${themeProp('fontSizeBase')};
  font-weight: 400;
  line-height: 1.5;
  color: ${themeProp('inputColor')};
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid ${themeProp('inputBorderColor')};
  border-radius: ${themeProp('inputBorderRadius')};
`

export const InputGroupPrepend = styled.div`
  margin-right: -1px;
  display: flex;
  &> ${InputGroupText} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`