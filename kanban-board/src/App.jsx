import React from 'react'
import Header from './components/Header'
import Board from './components/Board'
import Coulmn from './components/Coulmn';
import AddTaskModal from './components/AddTaskModal';
import { useState } from 'react';

const App = () => {

  const [model, setModel] = useState(false);
  const [task, setTask] = useState([])

  const handleModel = () => {
    if (model === false){
      setModel(true)
    }
  }
  const handleCloseModel = () => {
    if (model === true){
      setModel(false)
    }
  }

  return (
    <div>
      <Header onAddTask={handleModel} />
      {model && <AddTaskModal onClose={handleCloseModel} />}
       <Board />
    </div>
  )
}

export default App
