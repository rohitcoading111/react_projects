import React from 'react'

import Column from './Coulmn'

const Board = (props) => {


 const todoTasks = props.tasks.filter((task) => {
   return task.status === "Todo";
});

const inprogress =props.tasks.filter((task) => {
   return task.status === "In Progress";
});

const done = props.tasks.filter((task) => {
   return task.status === "Done";
});



  const columns = [
    {
      id: 1,
      title: "Todo",
      tasks:todoTasks,
    },
    {
      id: 2,
      title: "In Progress",
      tasks:inprogress
    },
    {
      id: 3,
      title: "Done",
       tasks:done
    },
  ];

  return (
    <main className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        {columns.map((column) => (
          <Column
            key={column.id}
            title={column.title}
            task={column.tasks}
          />
        ))}
      </div>
    </main>
  );
};

export default Board;
