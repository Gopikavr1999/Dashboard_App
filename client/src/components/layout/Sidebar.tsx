import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Settings,
  PackageOpen,
  MessageSquare,
  BarChart,
  Mail,
  Zap,
  Plug
} from 'lucide-react';

const Sidebar = () => {
  const baseStyle = 'flex items-center gap-2 py-2.5 px-4 rounded-lg transition font-medium';
  const activeStyle = 'bg-green-600 text-white hover:text-green-200';
  const inactiveStyle =
    'text-green-800 dark:text-green-100 hover:bg-green-100 dark:hover:bg-green-800 hover:text-green-800 dark:hover:text-white';

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 h-screen p-6 shadow-md border-r border-green-200 dark:border-gray-700 fixed z-10">
      <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-8">INFONIZ</h2>

      <input
        type="text"
        placeholder="Search..."
        className="w-full mb-6 px-4 py-2 border border-green-200 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#f8f9f5] dark:bg-gray-800 text-green-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
      />

      <div className="mb-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase mb-2">Main Menu</p>
        <nav className="space-y-2">
          <NavLink to="/dashboard" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}>
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>
          <NavLink to="/product" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}>
            <PackageOpen size={18} /> Product
          </NavLink>
          <NavLink to="/users" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}>
            <Users size={18} /> Users
          </NavLink>
          <NavLink to="/message" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}>
            <MessageSquare size={18} /> Message
          </NavLink>
          <NavLink to="/reports" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}>
            <BarChart size={18} /> Report & Analytics
          </NavLink>
        </nav>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase mb-2">Tools</p>
        <nav className="space-y-2">
          <NavLink to="/email" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}>
            <Mail size={18} /> Email
          </NavLink>
          <NavLink to="/automation" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}>
            <Zap size={18} /> Automation
          </NavLink>
          <NavLink to="/integration" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}>
            <Plug size={18} /> Integration
          </NavLink>
        </nav>
      </div>

      <div className="space-y-2 mt-auto">
        <NavLink to="/settings" className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}>
          <Settings size={18} /> Settings
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
