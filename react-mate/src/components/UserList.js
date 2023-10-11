import React, { useEffect, useState } from 'react';
import { getUserList } from '../services/api';

const UserList = ({ token }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUserList(token);
        const userList = response.data;
        setUsers(userList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [token]);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;