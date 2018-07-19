import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';

import CardTable from './cardTable';

export default class LoadingTablesCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {

      const { tables } = this.props;
      
      if(tables.tables ){
          const tablesNames = Object.keys(tables.tables)
          .map((table) => 
          <Col className='tables-columns' key={table} span={18}>
            <Card title={table}><CardTable columns={tables.tables[table]}/></Card>
          </Col>);

          return (
            <div>
              <Row type='flex' justify="center">
                {tablesNames}
              </Row>
            </div>
          );
      } else {
          return null;
      }


  }
}