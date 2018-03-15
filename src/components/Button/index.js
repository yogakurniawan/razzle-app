import styled, { css } from 'styled-components';
import { themeProp } from 'utils/theme'
import { colorYiq } from 'utils/color-functions'

export const ThemedButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

export const Button = styled.button`
  ${({ theme, color }) =>
    css`
      color: ${colorYiq(theme[color])};
      background-color: ${theme[color]};
      border-color: ${theme[color]};
    `
  }
  ${({ theme, outline, color }) =>
  outline && css`
    color: ${theme[color]};
    background-color: transparent;
    background-image: none;
    border-color: ${theme[color]};
    border-width: 2px;
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
  user-select: none;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  text-align: center;
  vertical-align: middle;
  font-weight: ${themeProp('btnFontWeight')};
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
    opacity: ${themeProp('btnDisabledOpacity')};
    box-shadow: none;
  }
`