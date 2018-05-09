import React from 'react'
import {
  Navbar,
  NavbarMenu,
  NavbarItem,
  NavbarStart,
  NavbarBrand,
  NavbarBurger
} from './BulmaStyles'

export default function NavbarBulma() {
  return (
    <Navbar>
      <NavbarBrand>
        <NavbarBurger state="inactive">
          <span></span>
          <span></span>
          <span></span>
        </NavbarBurger>
      </NavbarBrand>
      <NavbarMenu>
        <NavbarStart>
          <NavbarItem href="">
            Home
          </NavbarItem>
        </NavbarStart>
      </NavbarMenu>
    </Navbar>
  )
}