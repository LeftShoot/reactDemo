import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../assets/css/Login.css';

import axios from 'axios';

export default () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);

        axios.post('http://rap2.taobao.org:38080/app/mock/data/1722836', {
          account: '',
          psw: ''
        }).then(response => {

        })
    };

    const initialValues = {
      remember: true
    }

    const rules = {
      'username': [{
          required: true,
          message: '请输入账号!',
        }],
      'password': [{
          required: true,
          message: '请输入密码!',
        }] 
    }  
    
      return (
        <div id="components-form-demo-normal-login">
         <Form name="normal_login" className="login-form" initialValues={initialValues} onFinish={onFinish}>

          <Form.Item name="username" rules={rules["username"]}>
            <Input prefix={<UserOutlined/>} placeholder="请输入账号" />
          </Form.Item>

          <Form.Item name="password" rules={rules["password"]}>
            <Input prefix={<LockOutlined/>} type="password" placeholder="请输入密码"/>
          </Form.Item>
          
          <Form.Item label="系统类型：">
            <Select>
             <Select.Option value="sdxlt">输气象线路图</Select.Option>
             <Select.Option value="sdjm">气象建模</Select.Option>
             <Select.Option value="webjm">web建模</Select.Option>
             <Select.Option value="jsjzs">旧数据展示</Select.Option>
            </Select>
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
         </Form>
        </div>
          );
};


