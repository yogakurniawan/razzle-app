import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Button from 'antd/lib/button'
import { createPatient } from 'actions/patient'
import Table from 'components/Table'
import PatientsData from 'data/patients.json'

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

  getColumns() {
    const columns = [
      {
        dataField: 'patientGUID',
        text: 'Name'
      },
      {
        dataField: 'name',
        text: 'Address'
      },
      {
        dataField: 'price',
        text: 'Gender'
      },
      {
        dataField: 'price',
        text: 'DOB'
      },
      {
        dataField: 'price',
        text: 'Age'
      },
      {
        dataField: 'price',
        text: 'Home'
      },
      {
        dataField: 'price',
        text: 'Work'
      },
      {
        dataField: 'price',
        text: 'Mobile'
      },
      {
        dataField: 'price',
        text: 'Medicare'
      },
      {
        dataField: 'confidentiality',
        text: 'Conf.'
      }
    ]
    return columns
  }

  render() {
    return (
      <Grid style={{ marginTop: 20 }}>
        <Row center="xs">
          <Col lg={10} md={8} sm={10} xs={12}>
            <Table keyField='patientGUID' columns={this.getColumns()} data={[]} />
            <Button type="primary">Primary</Button>
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