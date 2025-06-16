import Layout from '../layout/Layout';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import StatCard from '../StatCard';

import {
  initialStatsData,
  registrationsData,
  rolesData,
} from '../../data/dashboardData.tsx';
import type { StatType } from '../../data/dashboardData.tsx';

export default function Dashboard() {
  const [statsData, setStatsData] = useState<StatType[]>(initialStatsData);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(statsData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setStatsData(items);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#f8f9f5] dark:bg-gray-950 py-8 px-4 transition-colors duration-300">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-green-700 dark:text-white">
            Dashboard Overview
          </h2>

          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="stats" direction="horizontal">
              {(provided) => (
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {statsData.map((stat, index) => (
                    <Draggable key={stat.id} draggableId={stat.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <StatCard {...stat} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          {/* Additional Graphs Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-green-200 dark:border-green-700 shadow-md p-4">
              <h3 className="text-xl font-semibold text-green-700 dark:text-white mb-2">
                User Registrations Over Time
              </h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={registrationsData}>
                    <XAxis dataKey="month" stroke="#a3a3a3" />
                    <YAxis stroke="#a3a3a3" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        borderColor: '#22c55e',
                        color: '#f3f4f6',
                      }}
                    />
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <Line
                      type="monotone"
                      dataKey="registrations"
                      stroke="#22c55e"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl border border-green-200 dark:border-green-700 shadow-md p-4">
              <h3 className="text-xl font-semibold text-green-700 dark:text-white mb-2">
                Active Users by Role
              </h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={rolesData}>
                    <XAxis dataKey="role" stroke="#a3a3a3" />
                    <YAxis stroke="#a3a3a3" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1f2937',
                        borderColor: '#16a34a',
                        color: '#f3f4f6',
                      }}
                    />
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <Bar dataKey="count" fill="#16a34a" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
