import { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { apiGet } from '../services/apiService'; 

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [form, setForm] = useState({ name: '', email: '', company: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await apiGet('https://jsonplaceholder.typicode.com/users');
        setUsers(data.map((u: any) => ({
          name: u.name,
          email: u.email,
          company: u.company.name,
        })));
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsers([{ ...form }, ...users]);
    setForm({ name: '', email: '', company: '' });
    setIsModalOpen(false);
  };

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig?.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortConfig) return 0;
    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];
    return sortConfig.direction === 'asc'
      ? aVal.localeCompare(bVal)
      : bVal.localeCompare(aVal);
  });

  const filteredUsers = sortedUsers.filter(user =>
    Object.values(user).some(val =>
      typeof val === 'string' && val.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
     <Layout>
      <div className="min-h-screen bg-[#f8f9f5] dark:bg-gray-900 py-10">
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md space-y-6 border border-green-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-green-700 dark:text-green-300">Manage Users</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Add User
            </button>
          </div>

          <input
            type="text"
            placeholder="Search by name, email or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-green-300 dark:border-gray-700 rounded-md px-4 py-2 w-full mb-4 bg-[#fdfefc] dark:bg-gray-700 text-green-900 dark:text-white caret-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-green-200 dark:divide-gray-700">
              <thead className="bg-green-50 dark:bg-gray-700">
                <tr>
                  {['name', 'email', 'company'].map((key) => (
                    <th
                      key={key}
                      onClick={() => handleSort(key)}
                      className="cursor-pointer text-left px-6 py-3 text-green-700 dark:text-green-100 font-semibold"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      {sortConfig?.key === key ? (sortConfig.direction === 'asc' ? ' ▲' : ' ▼') : ''}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-green-100 dark:divide-gray-600">
                {filteredUsers.map((u, idx) => (
                  <tr key={idx} className="hover:bg-green-50 dark:hover:bg-gray-700 transition">
                    <td className="px-6 py-2 text-green-900 dark:text-white">{u.name}</td>
                    <td className="px-6 py-2 text-green-900 dark:text-white">{u.email}</td>
                    <td className="px-6 py-2 text-green-900 dark:text-white">{u.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-w-xl space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-green-700 dark:text-green-300">Add New User</h3>
                <button onClick={() => setIsModalOpen(false)} className="w-6 h-8 flex items-center justify-center text-white bg-red-600 text-lg">
                  &times;
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['name', 'email', 'company'].map((field) => (
                    <input
                      key={field}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={form[field as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      required
                      className="border border-green-300 dark:border-gray-700 rounded-md px-4 py-2 bg-[#fdfefc] dark:bg-gray-700 text-green-900 dark:text-white caret-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    />
                  ))}
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 text-green-600 dark:text-green-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
