import React from 'react'
import './Login.css';
import { Row, Col, Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Login() {
    return (
        <div className='main'>
            <Row>
            <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                    <div className='section1'>
                        <h3 className='heading1'>Work on big ideas,<br />without the busywork.</h3>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <div className='section2'>
                        <h3 className='logo-heading'>RemoteSync</h3>
                        <h2 className='login-heading'>Login to your Account </h2>
                        <h6 className='login-subheading'>See what is going on with your business</h6>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 24,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            style={{
                                maxWidth: 400,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="on"
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Enter your username!',
                                    },
                                ]}
                            >
                                <Input className='input'/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Enter your password!',
                                    },
                                ]}
                            >
                                <Input.Password className='input'/>
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 24,
                                }}
                            >
                                <Checkbox className='remember-me'>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 24,
                                }}
                            >
                                <Button className="login-btn1" htmlType="submit">
                                    Login
                                </Button>
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 24,
                                }}
                            >
                                <Button className="login-btn2" htmlType="submit">
                                    Login as Admin
                                </Button>
                                <Button className="login-btn3" htmlType="submit">
                                    Login as Member
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Login;