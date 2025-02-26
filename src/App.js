import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import UsersList from './pages/UsersList';
import ViewUser from './pages/ViewUser';
import { message } from 'antd';

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const [users, addUsers] = useState([]);

  const receivedNewUser = record => {
    addUsers(prevState => [...prevState, record]);
    messageApi.open({
      type: 'success',
      content: 'New user is added successfully.',
  });
  }

  const handleDeleteUser = (userId) => {
    addUsers(users.filter(user => user.id !== Number(userId)));
    messageApi.open({
      type: 'success',
      content: 'User is deleted successfully.',
    });
  }

  const handleEditUser = (updatedData) => {
    addUsers(prevUsers => 
        prevUsers.map(user => 
          user.id === Number(updatedData.id)
            ? { ...user, ...updatedData }
            : user
        )
      );
      messageApi.success('User is updated successfully.');
  }

  return (
    <Router>
      <div className="app-container">
      {contextHolder}
        <h2>User Module</h2>
        <Navigation />
        <Routes>
          <Route path="/" element={<UsersList userList={users} deleteUser={handleDeleteUser} />} />
          <Route path="/users" element={<UsersList userList={users} deleteUser={handleDeleteUser} />} />
          <Route path="/users/add" element={<AddUser receivedNewUser={receivedNewUser} />} />
          <Route path="/users/edit/:id" element={<EditUser userEdit={users} UpdateUser={handleEditUser} />} />
          <Route path="/users/view/:id" element={<ViewUser viewUser={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <Link to="/users">Users List</Link>
      {location.pathname !== '/users/add' && (
        <> | <Link to="/users/add">Add User</Link></>
      )}
    </nav>
  );
}

export default App;
