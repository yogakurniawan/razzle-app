import React, { Component } from 'react';
import { User2 } from 'components/Icon'
import {
  Navbar,
  NavbarMenu,
  NavbarItem,
  NavbarItemLink,
  NavbarItemDiv,
  NavbarStart,
  NavbarBrand,
  NavbarBurger,
  NavbarLabel,
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
          <NavbarBurger data-testid="navbar-burger" onClick={this.toggleState} state={active ? 'active' : 'inactive'}>
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
            <NavbarItemLink to="/appointments">
              Appointments
            </NavbarItemLink>
            <NavbarItemLink to="/waitingroom">
              Waiting Room
            </NavbarItemLink>
            <NavbarItemLink to="/patients">
              Patients
            </NavbarItemLink>
            <NavbarItemDiv state="has-dropdown">
              <NavbarLabel>
                Accounts
              </NavbarLabel>
              <NavbarDropDown>
                <NavbarItemLink to="/sales">
                  Sales
                </NavbarItemLink>
                <NavbarItemLink to="/expenses">
                  Expenses
                </NavbarItemLink>
                <NavbarItemLink to="/distributions">
                  Distributions
                </NavbarItemLink>
                <NavbarItemLink to="/journal">
                  Journal
                </NavbarItemLink>
                <NavbarItemLink to="/reconciliation">
                  Reconciliation
                </NavbarItemLink>
                <NavbarItemLink to="/acir">
                  AIR - Claiming
                </NavbarItemLink>
                <NavbarItemLink to="/claiming">
                  Claiming
                </NavbarItemLink>
              </NavbarDropDown>
            </NavbarItemDiv>
            <NavbarItemDiv state="has-dropdown">
              <NavbarLabel>
                More
              </NavbarLabel>
              <NavbarDropDown>
                <NavbarItemLink to="/resources">
                  Resources
                </NavbarItemLink>
                <NavbarItemLink to="/settings">
                  Settings
                </NavbarItemLink>
                <NavbarItemLink to="/reporting">
                  Reporting
                </NavbarItemLink>
                <NavbarItemLink to="/audit">
                  Audit
                </NavbarItemLink>
                <NavbarItemLink to="/utilities">
                  Utilities
                </NavbarItemLink>
              </NavbarDropDown>
            </NavbarItemDiv>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItemDiv state="has-dropdown">
              <NavbarLabel>
                <User2 />
              </NavbarLabel>
              <NavbarDropDown position="right">
                <NavbarItem onClick={logout}>
                  Logout
                </NavbarItem>
              </NavbarDropDown>
            </NavbarItemDiv>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    )
  }
}