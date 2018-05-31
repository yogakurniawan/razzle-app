import React, { Component } from 'react'
import { Table, Th, Th1 } from './Styled'

export default class TableComponent extends Component {
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <Th1>No.</Th1>
                        <Th>Invoice Subject</Th>
                        <Th>Client</Th>
                        <Th>VAT No.</Th>
                        <Th>Created</Th>
                        <Th>Status</Th>
                        <Th>Price</Th>
                        <Th></Th>
                        <Th></Th>
                    </tr>
                </thead>
            </Table>
        )
    }
}