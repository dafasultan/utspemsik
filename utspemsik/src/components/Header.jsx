// src/components/Header.jsx
const Header = ({ userName }) => (
  <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <div className="text-sm">Menu</div>
    <div className="flex items-center space-x-2">
      <span>{userName}</span>
      <div className="h-8 w-8 bg-gray-300 rounded-full" />
    </div>
  </header>
);

export default Header;
