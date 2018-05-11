import React, { Component } from 'react';
import {
  Navbar,
  NavbarMenu,
  NavbarItem,
  NavbarStart,
  NavbarBrand,
  NavbarBurger
} from './BulmaStyles'

export default class NavbarBulma extends Component {
  state = {
    active: false
  }

  toggleState = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const { active } = this.state
    return (
      <Navbar>
        <NavbarBrand>
          <NavbarBurger onClick={this.toggleState} state={active ? 'active' : 'inactive'}>
            <span></span>
            <span></span>
            <span></span>
          </NavbarBurger>
        </NavbarBrand>
        <NavbarMenu state={active ? 'active' : 'inactive'}>
          <NavbarStart>
            <NavbarItem href="">
              Home
            </NavbarItem>
          </NavbarStart>
        </NavbarMenu>
      </Navbar>
    )
  }
}