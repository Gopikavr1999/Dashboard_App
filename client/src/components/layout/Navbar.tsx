import { useAuth } from "../context/AuthContext";
import { LogOut, Download } from "lucide-react";

const Navbar = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="fixed top-0 left-64 right-0 z-20 h-16 bg-white dark:bg-gray-800 border-b border-green-200 dark:border-gray-700 shadow-sm px-6 flex items-center justify-between">
      <h1 className="text-xl font-bold text-green-700 dark:text-green-300">Admin Dashboard</h1>

      <div className="flex items-center gap-6">
        <button
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded hover:bg-orange-600 transition"
        >
          <Download size={16} /> Export
        </button>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="rounded-full w-9 h-9 border border-green-300 dark:border-gray-600"
          />
          <div className="text-right">
            <p className="text-green-800 dark:text-white font-semibold text-sm">Leslie Watson</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 text-sm font-medium rounded hover:bg-green-700 transition"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
