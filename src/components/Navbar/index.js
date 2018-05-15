import React, { Component } from 'react';
import { User2 } from 'components/Icon'
import {
  Navbar,
  NavbarMenu,
  NavbarItemLink,
  NavbarItemDiv,
  NavbarStart,
  NavbarBrand,
  NavbarBurger,
  NavbarLink,
  NavbarDropDown,
  NavbarEnd
} from './Styled'

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
    const { logout } = this.props
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
            <NavbarItemLink to="/">
              Home
            </NavbarItemLink>
            <NavbarItemLink to="/">
              Appointments
            </NavbarItemLink>
            <NavbarItemLink to="/">
              Waiting Room
            </NavbarItemLink>
            <NavbarItemLink to="/">
              Patients
            </NavbarItemLink>
            <NavbarItemLink to="/">
              Accounts
            </NavbarItemLink>
            <NavbarItemDiv state="has-dropdown" to="/">
              <NavbarLink to="/">
                More
              </NavbarLink>
              <NavbarDropDown>
                <NavbarItemLink to="/">
                  Resources
                </NavbarItemLink>
                <NavbarItemLink to="/">
                  Settings
                </NavbarItemLink>
                <NavbarItemLink to="/">
                  Reporting
                </NavbarItemLink>
                <NavbarItemLink to="/">
                  Audit
                </NavbarItemLink>
                <NavbarItemLink to="/">
                  Utilities
                </NavbarItemLink>
              </NavbarDropDown>
            </NavbarItemDiv>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItemDiv state="has-dropdown" to="/">
              <NavbarLink to="/">
                <User2 />
              </NavbarLink>
              <NavbarDropDown position="right">
                <NavbarItemLink to="/" onClick={logout}>
                  Logout
                </NavbarItemLink>
              </NavbarDropDown>
            </NavbarItemDiv>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    )
  }
}