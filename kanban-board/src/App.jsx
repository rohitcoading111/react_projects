import React from 'react'
import Header from './components/Header'
import Board from './components/Board'
import Coulmn from './components/Coulmn';
import AddTaskModal from './components/AddTaskModal';
import { useState } from 'react';

const App = () => {

  const [model, setModel] = useState(false);
  const [tasks, setTasks] = useState([])

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
  const handleonAddTask = (newTask)=>{
      setTasks([...tasks,newTask])
  }

  return (
    <div>
      <Header onAddTask={handleModel} />
      {model && <AddTaskModal onAddTask={handleonAddTask}  onClose={handleCloseModel} />}
       <Board tasks={tasks} />
    </div>
  )
}

export default App
