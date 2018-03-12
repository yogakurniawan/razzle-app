import styled, { css } from 'styled-components';
import { themeProp } from 'utils/theme'
import * as defaultTheme from './defaultTheme';

const {
  btnFontWeight
} = defaultTheme

const ButtonStyle = css`
  user-select: none;
  border: 1px solid transparent;
  display: inline-block;
  height: 28px;
  padding: 0 8px;
  font-size: 14px;
  line-height: 1;
  fill: currentColor;
  transition: all .2s ease-in-out;
  text-align: center;
  border-radius: 5px;
  &:active {
    border-style: solid;
  }
`

export const DownloadButton = styled.button`
  ${ButtonStyle}
  background-color: #3cb46e;
  color: #fff;
  &:hover {
    background-color: #37a866;
  }
`

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
  font-weight: ${themeProp('btnFontWeight', btnFontWeight)};
`