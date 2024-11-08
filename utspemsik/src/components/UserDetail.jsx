// src/components/UserDetail.jsx
const UserDetail = ({ user }) => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">User Detail</h2>
    <p>
      <strong>Name:</strong> {user.name}
    </p>
    <p>
      <strong>Email:</strong> {user.email}
    </p>
    <p>
      <strong>Phone:</strong> {user.phone}
    </p>
  </div>
);

export default UserDetail;
