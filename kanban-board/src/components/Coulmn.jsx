import React from "react";
import TaskCard from "./TaskCard";

const Column = (props) => {
  return (
    <div className="rounded-2xl bg-gray-100 p-4 shadow-md">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">
          {props.title}
        </h2>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          {props.task.length}
        </span>
      </div>

      <div className="mb-4 h-[1px] bg-gray-300"></div>

      {/* Tasks Container */}
      <div className="min-h-[500px] rounded-xl border-2 border-dashed border-gray-300 p-3">

        {props.task.length === 0 ? (
          <div className="flex h-[460px] items-center justify-center">
            <p className="text-lg font-medium text-gray-500">
              No Tasks Yet
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {props.task.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Column;