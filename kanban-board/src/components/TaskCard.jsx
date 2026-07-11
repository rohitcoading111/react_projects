import React from 'react'

const TaskCard = ({ onEdit, onDelete,id,task}) => {
  return (
    <div className="mb-4 cursor-pointer rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
 
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
          High
        </span>

        <span className="text-sm text-gray-500">
          📅 08 Jul
        </span>
      </div>

      <h3 className="text-lg font-semibold text-gray-800">
        Build Kanban UI
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Create responsive board layout using React and Tailwind CSS.
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
          React
        </span>

        <div className="flex gap-2">
          <button onClick={()=>{
            return onEdit=(task)
          }} className="rounded-lg bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700 transition hover:bg-yellow-200">
            Edit
          </button>

          <button onClick={() => {
           return  onDelete(id);
          }} className="rounded-lg bg-red-100 px-3 py-1 text-sm font-medium text-red-600 transition hover:bg-red-200">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
