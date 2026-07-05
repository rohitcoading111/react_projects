import React from 'react'
import TaskCard from './TaskCard';

const Column = (props) => {
  return (
    <div className="min-h-[500px] rounded-2xl bg-gray-100 p-4 shadow-md">
      
      {/* Column Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">
          {props.title}
        </h2>

        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          0
        </span>
      </div>

      {/* Divider */}
      <div className="mb-4 h-[1px] w-full bg-gray-300"></div>

      {/* Empty State */}
      <div className="flex h-[380px] items-center justify-center rounded-xl border-2 border-dashed border-gray-300">
        <p className="text-gray-500 font-medium">
          <TaskCard />
        </p>
      </div>

    </div>
  );
};

export default Column;
