import React, { Component } from 'react';

import Upload from 'antd/lib/upload';
import Icon from 'antd/lib/icon';
import message from 'antd/lib/message';
const Dragger = Upload.Dragger;

export default class UploadFile extends Component {
  constructor (props) {
    super(props);

    this.state = {
      dragger: {
        name: 'file',
        multiple: true,
        action: '//localhost:8080/upload'
      }
    };
    this.onChange = this.onChange.bind(this);
    this.beforeUpload = this.beforeUpload.bind(this);
  }


  handleItemClick (e, { name }) {
    this.setState({ activeItem: name });
  }
  
  beforeUpload() {
    const { isFileLoading } = this.props;
    isFileLoading(true);
  }

  onChange (info) {
    const status = info.file.status;
    if (status === 'done') {
      const { isFileLoading, renderTables } = this.props;
      isFileLoading(false);
      renderTables(info.file.response.msg);
      message.success(`${info.file.name} file uploaded successfully.`);
    }
    else if (status === 'error')
      message.error(`${info.file.name} file upload failed.`);
  }

  render () {
    return (
      <div>
        <Dragger accept= {'.sql'} beforeUpload={this.beforeUpload} onChange={this.onChange} {...this.state.dragger}>
          <p className='ant-upload-drag-icon'>
            <Icon type='inbox' />
          </p>
          <p className='ant-upload-text'>Click or drag file to this area to upload</p>
          <p className='ant-upload-hint'>only supported for .sql files</p>
        </Dragger>
      </div>
    );
  }
}
