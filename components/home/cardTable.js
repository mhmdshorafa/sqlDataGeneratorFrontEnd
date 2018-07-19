import React, { Component } from 'react';
import { Table } from 'antd';
import faker from 'faker';
import TableCascader from './tableCascader'

export default class LoadingTablesCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const columnsNames = [
        {
          title: 'column',
          dataIndex: 'column',
          key: 'column'
        },
        {
            title: 'type',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: 'value type',
            dataIndex: 'value type',
            key: 'value type',
            render: () => <TableCascader />
        } 
    ];

    const { columns } = this.props;

    const dataSource = columns
      .map((column) => ({
        key: column.name || Object.keys(column)[0],
        column:column.name || Object.keys(column)[0],
        type: column.datatype || `${column[Object.keys(column)[0]].table} forieng key`
      }))

    return <Table dataSource={dataSource} columns={columnsNames} />
  }

}