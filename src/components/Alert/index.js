import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import { Button } from 'components/Button'
import {
  Header,
  Title,
  Body,
  Footer
} from './Styled'

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

if (typeof (window) !== 'undefined') {
  Modal.setAppElement('#root')
}

export default class Alert extends Component {
  afterOpenModal = () => {
    ReactDOM.findDOMNode(this.refs['ok']).focus()
  }

  onCancel = () => {
    const { onCancel, onRequestClose } = this.props
    onCancel && onCancel()
    onRequestClose()
  }

  onConfirm = () => {
    const { onConfirm, onRequestClose } = this.props
    onConfirm && onConfirm()
    onRequestClose()
  }

  render() {
    const {
      isOpen,
      onRequestClose,
      title,
      children,
      cancelButtonText,
      confirmButtonText
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
          {children}
        </Body>
        <Footer>
          {
            cancelButtonText &&
            <Button ref="cancel" onClick={this.onCancel} color="primary">
              {cancelButtonText}
            </Button>
          }
          <Button ref="ok" onClick={this.onConfirm} color="primary">
            {confirmButtonText}
          </Button>
        </Footer>
      </Modal>
    )
  }
}