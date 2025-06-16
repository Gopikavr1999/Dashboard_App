import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../src/components/pages/Login';
import Dashboard from '../src/components/pages/Dashboard';
import Users from '../src/components/pages/Users';
import Settings from '../src/components/pages/Settings';
import type { ReactNode } from 'react';

const isAuthenticated = () => !!localStorage.getItem('auth-token');

const ProtectedRoute = ({ children }: { children: ReactNode }) =>
  isAuthenticated() ? children : <Navigate to="/login" />;

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default App;
