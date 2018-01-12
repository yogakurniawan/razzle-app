import styled, { css } from 'styled-components';

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