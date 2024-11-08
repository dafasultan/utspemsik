// src/pages/UserListPage.jsx
import { useEffect, useState } from "react";
import UserList from "../components/UserList";

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return <UserList users={users} />;
};

export default UserListPage;
