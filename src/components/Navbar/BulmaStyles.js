import styled, { css } from 'styled-components'

const baseNavbar = css`
  @media screen and (min-width: 1088px) {
    align-items: stretch;
    display: flex;
  }
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
  }
`

export const NavbarMenu = styled.div`
  ${baseNavbar}
  @media screen and (min-width: 1088px) {
    flex-grow: 1;
    flex-shrink: 0;
  }
  @media screen and (max-width: 1087px) {
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(10,10,10,.1);
    padding: .5rem 0;
  }
`

export const NavbarStart = styled.div`
  ${baseNavbar}
  @media screen and (min-width: 1088px) {
    justify-content: flex-start;
    margin-right: auto;
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
    `
  }
`

export const NavbarItem = styled.a`
  color: #0a0a0a;
  cursor: pointer;
  text-decoration: none;
  flex-grow: 0;
  flex-shrink: 0;
  line-height: 1.5;
  padding: .5rem .75rem;
  position: relative;
  @media screen and (min-width: 1088px) {
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: #f2f2f2;
  }
`