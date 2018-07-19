import React from 'react';
import UploadFile from './uploadFile';
import Tables from './cards';
import { Row, Col } from 'antd';
import LoadingTablesCards from './loadingTablesCards';
import withReduxStore from '../../lib/with-redux-store';
const homePage = (props) => 
  <div>
      <Row type='flex' justify="space-between">
        <Col span={24}>
         <UploadFile {...props}/>
        </Col>
      </Row>
      <Row>
        <Col>
         <LoadingTablesCards {...props}/>
        </Col>
      </Row>
      <Row>
        <Col><Tables {...props}/></Col>
      </Row>
  </div>

export default withReduxStore(homePage);

    