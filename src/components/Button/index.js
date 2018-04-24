import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { colorYiq } from 'utils/color-functions'

const baseButtonCss = css`
  ${({ theme, color }) =>
    css`
      color: ${colorYiq(theme[color])};
      background-color: ${theme[color]};
      border-color: ${theme[color]};
    `
  }
  user-select: none;
  padding: .375rem .75rem;
  font-size: 1rem;
  white-space: nowrap;
  line-height: 1.5;
  border-radius: .25rem;
  text-align: center;
  vertical-align: middle;
  font-weight: normal;
  &:hover, &:focus {
    text-decoration: none;
  }
  &:focus, &:active {
    outline: 0;
  }
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.65;
    box-shadow: none;
  }
`

const buttonOutlineBaseCss = css`
  ${({ theme, color }) =>
    css`
    color: ${theme[color]};
    background-color: transparent;
    background-image: none;
    border-color: ${theme[color]};
    border-width: 2px;
    border-style: solid;
    border-image: initial;
    &:hover {
      color: #fff;
      background-color: ${theme[color]};
      border-color: ${theme[color]};
    }
    &:disabled {
      color: ${theme[color]};
      background-color: transparent;
    }
  `}
`

export const Button = styled.button`
  ${baseButtonCss}
`

export const ButtonOutline = styled.button`
  ${baseButtonCss}
  ${buttonOutlineBaseCss}
`

export const ButtonLinkOutline = styled(Link)`
  ${baseButtonCss}
  ${buttonOutlineBaseCss}
  display: inline-block;
  text-decoration: none;
`