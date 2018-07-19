import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';

export default class LoadingTablesCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  handleClick = () => {
    this.setState({ loading: !this.state.loading });
  }

  render() {
    const style = {
      display: this.props.uploadFile.isFileLoading ? 'block' : 'none'
    }
    return (
      <div style= {style}>
        <Row type='flex' justify="center">
          <Col span={20}>
           <Card  loading={this.state.loading} title="Card title">tables</Card>
          </Col>
          <Col span={20}>
          <Card loading={this.state.loading} title="Card title">tables</Card>
          </Col>
          <Col span={20}>
          <Card loading={this.state.loading} title="Card title">tables</Card>
          </Col>
          <Col span={20}>
          <Card loading={this.state.loading} title="Card title">tables</Card>
          </Col>
          <Col span={20}>
          <Card loading={this.state.loading} title="Card title">tables</Card>
          </Col>
        </Row>
      </div>
    );
  }
}