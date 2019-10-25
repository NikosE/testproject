import React, { useContext } from 'react'
import { Form, Icon, Input, Button, Card } from 'antd'
import { AuthContext } from '../context/AuthContext'
import './Login.css'

export const Login = () => {
  const auth = useContext(AuthContext)

  return (
    <div className = "box">
      <Card title="Test Project" bordered={false} style={{ width: 300, margin: 'auto'}}>
        <Form onSubmit={auth.signIn}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Όνομα Χρήστη"/>
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Κωδικός Χρήστη"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button><br/>
            <a className="login-form-forgot">
              Forgot password!
            </a><br/>
            <a>register now!</a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}


