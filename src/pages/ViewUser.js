import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Descriptions } from 'antd';

const ViewUser = ({ viewUser = [] }) => {
    const { id } = useParams();
    const user = viewUser.find(user => user.id === Number(id));

    return (
        <Card title="View User" variant={false} style={{ width: 600, margin: '0 auto' }}>
            <Descriptions column={1}>
                <Descriptions.Item label="ID">{user.id}</Descriptions.Item>
                <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                <Descriptions.Item label="Address">{user.address}</Descriptions.Item>
                <Descriptions.Item label="Mobile">{user.mobile}</Descriptions.Item>
            </Descriptions>
        </Card>
    );
};

export default ViewUser;
