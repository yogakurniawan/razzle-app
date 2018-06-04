import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import { createPatient } from 'actions/patient'
import Table from 'components/Table'

const productsGenerator = (quantity = 5) => {
  return (
    Array.from({ length: quantity }, (value, index) => ({
      id: index,
      name: `Item name ${index}`,
      price: 2100 + index
    }))
  )
}

class Home extends Component {

  state = {
    modalIsOpen: false
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  handleClick = () => {
    const { addPatient, history } = this.props
    addPatient('yoga kurniawan', 'asgard')
    history.push('/')
  }

  render() {
    const columns = [{
      dataField: 'id',
      text: 'Product ID'
    }, {
      dataField: 'name',
      text: 'Product Name'
    }, {
      dataField: 'price',
      text: 'Product Price'
    }]
    return (
      <Grid style={{ marginTop: 20 }}>
        <Row center="xs">
          <Col lg={10} md={8} sm={10} xs={12}>
            <Table keyField='id' columns={columns} data={productsGenerator()} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapDispatchToProps = {
  addPatient: createPatient
}

const mapStateToProps = (state) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)