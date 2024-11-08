// src/layouts/MainLayout.jsx
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const MainLayout = ({ children }) => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex flex-col flex-1">
      <Header userName="Admin" />
      <main className="p-6 bg-blue-50 flex-1 rounded-lg m-4">{children}</main>
    </div>
  </div>
);

export default MainLayout;
