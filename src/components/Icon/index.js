import styled, { css } from 'styled-components'

export const Icon = css`
  display: inline-block;
  font-family: Font Awesome\\ 5 Free;
  font-style: normal;
  font-variant: normal;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const User = styled.span `
  &:before {
    ${Icon}
    content: '\f2bd';
  }
`

export const Lock = styled.span `
  &:before {
    ${Icon}
    content: '\f084';
  }
`
