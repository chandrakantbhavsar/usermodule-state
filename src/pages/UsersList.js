import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Space, Popconfirm } from 'antd';

const UsersList = ({ userList = [], deleteUser }) => {

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/users/view/${record.id}`}>
            <Button type="link">View</Button>
          </Link>
          <Link to={`/users/edit/${record.id}`}>
            <Button type="link">Edit</Button>
          </Link>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h3>Users List</h3>
      <Table columns={columns} dataSource={userList} rowKey="id" />
    </div>
  );
};

export default UsersList;
