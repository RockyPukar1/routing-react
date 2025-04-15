import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-8 text-blue-600">MyApp</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
          🏠 Dashboard
        </Link>
        <Link to="/dashboard/profile" className="text-gray-700 hover:text-blue-600">
          👤 Profile
        </Link>
        <Link to="/dashboard/settings" className="text-gray-700 hover:text-blue-600">
          ⚙️ Settings
        </Link>
        <Link to="/" className="text-red-600 hover:underline mt-8">
          🚪 Logout
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
