import React from 'react'

import Column from './Coulmn'

const Board = () => {
  const columns = [
    {
      id: 1,
      title: "Todo",
    },
    {
      id: 2,
      title: "In Progress",
    },
    {
      id: 3,
      title: "Done",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-3 gap-6">
        {columns.map((column) => (
          <Column
            key={column.id}
            title={column.title}
          />
        ))}
      </div>
    </main>
  );
};

export default Board;
