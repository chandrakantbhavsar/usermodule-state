import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const AddUser = ({ receivedNewUser }) => {
    const navigate = useNavigate();
    const [form] = Form.useForm()

    const onFinish = (values) => {
        const uniqueId = Date.now() + Math.floor(Math.random() * 1000);
        values.id = Number(uniqueId);
        receivedNewUser(values);
        navigate('/');
    };

    return (
        <div className="form-container">
            <h2>Add User</h2>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                    <Input placeholder="Enter Name" />
                </Form.Item>
                <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter your address' }]}>
                    <Input placeholder="Enter Address" />
                </Form.Item>
                <Form.Item label="Mobile" name="mobile" rules={[{ required: true, message: 'Please enter your mobile number' }]}>
                    <Input placeholder="Enter Mobile Number" />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' },{ type: 'email', message: 'Please enter a valid email' }]}>
                    <Input placeholder="Enter Email" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add User
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddUser;
