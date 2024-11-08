// src/components/UserList.jsx
import { Link } from "react-router-dom";

const UserList = ({ users }) => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">User List</h2>
    <ul className="space-y-2">
      {users.map((user) => (
        <li key={user.id} className="p-4 bg-gray-100 rounded shadow">
          <Link to={`/user-detail/${user.id}`} className="font-semibold">
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default UserList;
