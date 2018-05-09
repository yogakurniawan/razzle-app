import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  ContainerFluid,
  NavbarBrand,
  NavbarFixed,
  NavbarHeader,
  NavbarMenu,
  NavbarItem,
  NavbarNavigation,
  ButtonMenu,
  Item,
  ArrowDownWrapper
} from './NavbarStyles'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { toggleMenu: false }

    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  handleToggleMenu() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }

  handleClickMenu(menu) {
    const { onClickMenu } = this.props
    onClickMenu(menu)
  }

  render() {
    const { menu } = this.props
    return (
      <ContainerFluid>
        <NavbarFixed>
          <NavbarMenu expand={this.state.toggleMenu}>
            <NavbarNavigation>
              <NavbarHeader>
                <NavbarBrand>
                  <ArrowDownWrapper onClick={this.handleToggleMenu}>
                    <span />
                  </ArrowDownWrapper>
                </NavbarBrand>
              </NavbarHeader>
              <NavbarItem>
                <ButtonMenu>
                  <Item active={menu === 'home'}><Link to="/">Home</Link></Item>
                </ButtonMenu>
              </NavbarItem>
              <NavbarItem>
                <ButtonMenu>
                  <Item active={menu === 'top_liked'}><Link to="/">Top Liked</Link></Item>
                </ButtonMenu>
              </NavbarItem>
              <NavbarItem>
                <ButtonMenu>
                  <Item active={menu === 'top_viewed'}><Link to="/">Top Viewed</Link></Item>
                </ButtonMenu>
              </NavbarItem>
              <NavbarItem>
                <ButtonMenu>
                  <Item active={menu === 'top_downloaded'}><Link to="/">Top Downloaded</Link></Item>
                </ButtonMenu>
              </NavbarItem>
            </NavbarNavigation>
          </NavbarMenu>
        </NavbarFixed>
      </ContainerFluid>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

