import { useState } from 'react';
import Layout from '../layout/Layout';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const [form, setForm] = useState({ name: '', email: '' });
  const { darkMode, toggleDarkMode } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...form, darkMode });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#f8f9f5] p-6 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md border border-green-200 dark:border-green-700 space-y-6">
          <h2 className="text-3xl font-bold text-green-700 dark:text-white">
            Settings
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                className="border border-green-300 dark:border-green-600 rounded-md px-4 py-2 bg-[#fdfefc] dark:bg-gray-800 text-green-900 dark:text-white caret-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                className="border border-green-300 dark:border-green-600 rounded-md px-4 py-2 bg-[#fdfefc] dark:bg-gray-800 text-green-900 dark:text-white caret-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="flex items-center space-x-4">
              <label className="text-green-800 dark:text-green-200 font-medium">
                Dark Mode:
              </label>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="h-5 w-5 text-green-600 dark:bg-gray-700 dark:border-gray-600 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition dark:bg-green-700 dark:hover:bg-green-600"
            >
              Save Settings
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
