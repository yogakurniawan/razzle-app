import React, { Component } from 'react';
import {
  Navbar,
  NavbarMenu,
  NavbarItemLink,
  NavbarItemDiv,
  NavbarStart,
  NavbarBrand,
  NavbarBurger,
  NavbarLink,
  NavbarDropDown
} from './Styles'

export default class NavbarBulma extends Component {
  state = {
    active: false,
    show: false
  }

  toggleState = () => {
    this.setState({
      active: !this.state.active
    })
  }

  toggleDropdown = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const { active, show } = this.state
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
            <NavbarItemLink href="">
              Home
            </NavbarItemLink>
            <NavbarItemLink href="">
              Appointments
            </NavbarItemLink>
            <NavbarItemLink href="">
              Waiting Room
            </NavbarItemLink>
            <NavbarItemLink href="">
              Patients
            </NavbarItemLink>
            <NavbarItemLink href="">
              Accounts
            </NavbarItemLink>
            <NavbarItemDiv state="has-dropdown" onMouseOver={this.toggleDropdown} onMouseOut={this.toggleDropdown} href="">
              <NavbarLink>
                More
              </NavbarLink>
              <NavbarDropDown state={show ? 'show' : 'hide'}>
                <NavbarItemLink>
                  Overview
                </NavbarItemLink>
                <NavbarItemLink>
                  Elements
                </NavbarItemLink>
                <NavbarItemLink>
                  Components
                </NavbarItemLink>
              </NavbarDropDown>
            </NavbarItemDiv>
          </NavbarStart>
        </NavbarMenu>
      </Navbar>
    )
  }
}