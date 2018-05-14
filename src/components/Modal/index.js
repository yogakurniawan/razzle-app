import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import { Button } from 'components/Button'
import {
  Header,
  Title,
  Body,
  Footer
} from './Styles'

const customStyles = {
  content: {
    padding: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    minWidth: '25rem',
    transform: 'translate(-50%, -50%)'
  }
}

if (typeof(window) !== 'undefined') {
  Modal.setAppElement('#root')
}

export default class ModalComponent extends Component {

  afterOpenModal = () => {
    ReactDOM.findDOMNode(this.refs['ok']).focus()
  }

  render() {
    const {
      isOpen,
      onRequestClose,
      title,
      message
    } = this.props
    return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={onRequestClose}
        style={customStyles}
        closeTimeoutMS={450}
        contentLabel="Modal">
        <Header>
          <Title>{title}</Title>
        </Header>
        <Body>
          <p>{message}</p>
        </Body>
        <Footer>
          <Button ref="ok" onClick={onRequestClose} color="primary">
            OK
          </Button>
        </Footer>
      </Modal>
    )
  }
}