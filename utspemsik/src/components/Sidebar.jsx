// src/components/Sidebar.jsx
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="bg-blue-100 text-gray-700 w-64 h-full flex flex-col p-4">
    <div className="flex items-center mb-6">
      <span className="text-lg font-semibold">Dashboard</span>
    </div>
    <div className="mt-4 space-y-2">
      <Link
        to="/dashboard"
        className="flex items-center p-2 text-sm hover:bg-blue-200 rounded"
      >
        <img
          src="src/assets/icons/home-icon.svg"
          alt="Dashboard Icon"
          className="h-5 w-5 mr-2"
        />
        Dashboard
      </Link>
      <Link
        to="/user-list"
        className="flex items-center p-2 text-sm hover:bg-blue-200 rounded"
      >
        <img
          src="src/assets/icons/menu-icon.svg"
          alt="Menu Icon"
          className="h-5 w-5 mr-2"
        />
        Menu
      </Link>
    </div>
  </div>
);

export default Sidebar;
