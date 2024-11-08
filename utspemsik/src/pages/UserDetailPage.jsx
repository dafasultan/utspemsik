// src/pages/UserDetailPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserDetail from "../components/UserDetail";

const UserDetailPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);

  return user ? <UserDetail user={user} /> : <p>Loading...</p>;
};

export default UserDetailPage;
