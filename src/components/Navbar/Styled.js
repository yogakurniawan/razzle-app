import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const baseNavbar = css`
  @media screen and (min-width: 1088px) {
    align-items: stretch;
    display: flex;
  }
`

const baseLink = css`
  cursor: pointer;
  text-decoration: none;
  color: #777;
  line-height: 1.5;
`

const baseNavbarItem = css`
  ${({ theme, state }) =>
    css`
      ${baseLink}
      font-size: 1rem;
      display: block;
      flex-grow: 0;
      flex-shrink: 0;
      padding: .5rem .75rem;
      position: relative;
      @media screen and (min-width: 1088px) {
        display: flex;
        align-items: center;
      }
      &:hover {
        background-color: #f7f7f7;
        color: ${theme.primary};
      }
      ${state === 'has-dropdown' &&
        css`
          padding: 0;
          @media screen and (min-width: 1088px) {
            align-items: stretch;
          }
      `}
  `}
`

export const NavbarLabel = styled.span`
  ${({ theme, state }) =>
    css`
      ${baseLink}
      display: block;
      padding: .5rem .75rem;
      position: relative;
      padding-right: 2.5em;
      &:hover {
        background-color: #f7f7f7;
        color: ${theme.primary};
      }
      @media screen and (min-width: 1088px) {
        align-items: center;
        display: flex;
      }
      &::after {
        margin-top: -.375em;
        right: 1.125em;
        border: 3px solid ${theme.primary};
        border-radius: 2px;
        border-right: 0;
        border-top: 0;
        content: " ";
        display: block;
        height: .625em;
        pointer-events: none;
        position: absolute;
        top: 50%;
        transform: rotate(-45deg);
        transform-origin: center;
        width: .625em;
      }
  `}
`

export const Navbar = styled.nav`
  background-color: #fff;
  color: #0a0a0a;
  min-height: 3.25rem;
  position: relative;
  z-index: 30;
  box-shadow: 0 2px 0 0 #f5f5f5;
  ${baseNavbar}
  @media screen and (min-width: 1088px) {
    min-height: 3.25rem;
    padding: 1rem 2rem;
  }
`

export const NavbarMenu = styled.div`
  ${baseNavbar}
  display: none;
  @media screen and (min-width: 1088px) {
    flex-grow: 1;
    flex-shrink: 0;
  }
  @media screen and (max-width: 1087px) {
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(10,10,10,.1);
    padding: .5rem 0;
    ${({ state }) => state === 'active' &&
      css`
        display: block;
      `
    }
  }
`

export const NavbarStart = styled.div`
  ${baseNavbar}
  @media screen and (min-width: 1088px) {
    justify-content: flex-start;
    margin-right: auto;
  }
`

export const NavbarEnd = styled.div`
  ${baseNavbar}
  @media screen and (min-width: 1088px) {
    justify-content: flex-end;
    margin-left: auto;
  }
`

export const NavbarBrand = styled.div`
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
`

export const NavbarBurger = styled.div`
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;
  @media screen and (min-width: 1088px) {
    display: none;
  }
  &:hover {
    background-color: rgba(0,0,0,.05);
  }
  > span {
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color,opacity,transform;
    transition-timing-function: ease-out;
    width: 16px;
    &:nth-child(1) {
      top: calc(50% - 6px);
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:nth-child(3) {
      top: calc(50% + 4px);
    }
  }
  ${({ state }) => state === 'active' &&
    css`
      span:nth-child(1) {
        transform: translateY(5px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-5px) rotate(-45deg);
      }
    `
  }
`

export const NavbarDropDown = styled.div`
  ${({ theme, position }) =>
    css`
      ${NavbarItemLink} {
        font-size: .875rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      padding-bottom: .5rem;
      padding-top: .5rem;
      @media screen and (min-width: 1088px) {
        background-color: ${theme.white};
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        border-top: 2px solid #dbdbdb;
        box-shadow: 0 8px 8px rgba(10,10,10,.1);
        display: none;
        left: 0;
        min-width: 10rem;
        position: absolute;
        top: 100%;
        z-index: 20;
        ${position === 'right' && css`
          left: auto;
          right: 0;
        `}
      }
  `}
`

export const NavbarItem = styled.div`
  ${baseNavbarItem}
`

export const NavbarItemLink = styled(Link)`
  ${baseNavbarItem}
`

export const NavbarItemDiv = styled.div`
  ${baseNavbarItem}
  &:hover {
    ${NavbarDropDown} {
      display: block;
    }
    background-color: initial;
  }
`