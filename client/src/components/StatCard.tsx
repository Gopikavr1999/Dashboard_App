import React from 'react';
import MiniChart from './MiniChart';

type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: number;
  chartType: 'line' | 'bar';
  chartData: { name: string; value: number }[];
  color: string;
};

export default function StatCard({
  icon,
  label,
  value,
  chartType,
  chartData,
  color,
}: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-green-200 dark:border-green-700 shadow-sm p-2 space-y-1 transition hover:shadow-md hover:bg-gradient-to-r hover:from-green-100 hover:to-orange-100 dark:hover:from-gray-800 dark:hover:to-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-green-700 dark:text-green-300">{label}</h3>
          <p className="text-2xl font-bold text-green-900 dark:text-white">{value}</p>
        </div>
        {icon}
      </div>
      <div className="h-[80px]">
        <MiniChart type={chartType} data={chartData} stroke={color} fill={color} />
      </div>
    </div>
  );
}
