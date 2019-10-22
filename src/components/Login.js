import React, { useContext } from 'react'
import { Form, Icon, Input, Button, Card } from 'antd'
import { AuthContext } from '../context/AuthContext'

export const Login = () => {
  const auth = useContext(AuthContext)

  return (
      <Card bordered={false} style={{ width: 300 }}>
        <Form onSubmit={auth.signIn}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"/>
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button><br/>
            <a className="login-form-forgot" href="">
              Forgot password!
            </a>&nbsp;&nbsp;
            <a href="">register now!</a>
          </Form.Item>
        </Form>
      </Card>
  )
}


