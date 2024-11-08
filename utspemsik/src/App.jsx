// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-list" element={<UserListPage />} />
          <Route path="/user-detail/:userId" element={<UserDetailPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
