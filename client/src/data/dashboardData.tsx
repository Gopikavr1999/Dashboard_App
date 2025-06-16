import { Users, Clock3, BarChart3, HeartPulse } from 'lucide-react';

export type StatType = {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: number;
  chartType: 'line' | 'bar';
  chartData: { name: string; value: number }[];
  color: string;
};

export const initialStatsData: StatType[] = [
  {
    id: 'users',
    icon: <Users className="w-6 h-6 text-green-600" />,
    label: 'Users',
    value: 120,
    chartType: 'line',
    chartData: [
      { name: 'Jan', value: 30 },
      { name: 'Feb', value: 45 },
      { name: 'Mar', value: 60 },
      { name: 'Apr', value: 40 },
      { name: 'May', value: 80 },
      { name: 'Jun', value: 70 },
    ],
    color: '#22c55e',
  },
  {
    id: 'sessions',
    icon: <Clock3 className="w-6 h-6 text-green-600" />,
    label: 'Active Sessions',
    value: 45,
    chartType: 'line',
    chartData: [
      { name: 'Jan', value: 20 },
      { name: 'Feb', value: 30 },
      { name: 'Mar', value: 50 },
      { name: 'Apr', value: 45 },
    ],
    color: '#16a34a',
  },
  {
    id: 'requests',
    icon: <BarChart3 className="w-6 h-6 text-green-600" />,
    label: 'Pending Requests',
    value: 8,
    chartType: 'bar',
    chartData: [
      { name: 'Admin', value: 5 },
      { name: 'Editor', value: 12 },
      { name: 'Viewer', value: 25 },
    ],
    color: '#15803d',
  },
  {
    id: 'health',
    icon: <HeartPulse className="w-6 h-6 text-green-600" />,
    label: 'System Health',
    value: 98,
    chartType: 'line',
    chartData: [
      { name: 'Jan', value: 95 },
      { name: 'Feb', value: 96 },
      { name: 'Mar', value: 97 },
      { name: 'Apr', value: 98 },
      { name: 'May', value: 99 },
      { name: 'Jun', value: 98 },
    ],
    color: '#0f766e',
  },
];

export const registrationsData = [
  { month: 'Jan', registrations: 30 },
  { month: 'Feb', registrations: 45 },
  { month: 'Mar', registrations: 60 },
  { month: 'Apr', registrations: 40 },
  { month: 'May', registrations: 80 },
  { month: 'Jun', registrations: 70 },
];

export const rolesData = [
  { role: 'Admin', count: 5 },
  { role: 'Editor', count: 12 },
  { role: 'Viewer', count: 25 },
];
