import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, Row, Col } from 'antd';

const EditUser = ({ userEdit = [], UpdateUser }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    
    useEffect(() => {
        const mockUser = userEdit.find(user => user.id === Number(id));
        if (mockUser) {
            form.setFieldsValue(mockUser);
        } else {
            navigate('/users');
        }
    }, [id, form, userEdit, navigate]);

    const onFinish = (values) => {
        values.id = Number(id); 
        UpdateUser(values);    
        navigate('/');
    };

    return (
        <Card title="Edit User" style={{ width: 600, margin: '50px auto' }}>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item 
                            label="Name" 
                            name="name" 
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input placeholder="Enter Name" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item 
                            label="Address" 
                            name="address" 
                            rules={[{ required: true, message: 'Please enter your address' }]}
                        >
                            <Input placeholder="Enter Address" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item 
                            label="Mobile" 
                            name="mobile" 
                            rules={[{ required: true, message: 'Please enter your mobile number' }]}
                        >
                            <Input placeholder="Enter Mobile Number" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item 
                            label="Email" 
                            name="email" 
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Please enter a valid email' }
                            ]}
                        >
                            <Input placeholder="Enter Email" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Update User
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default EditUser;
