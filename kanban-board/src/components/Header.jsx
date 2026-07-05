import React from 'react'

const Header = (props) => {
  return (
    <header className="w-full bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            📋 Kanban Board
          </h1>
          <p className="text-sm text-gray-500">
            Organize your tasks efficiently
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-72 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button onClick={props.onAddTask} className="rounded-lg bg-blue-600 px-5 py-2 text-white font-semibold transition hover:bg-blue-700">
            + Add Task
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

