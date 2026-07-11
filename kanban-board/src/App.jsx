import React from 'react'
import Header from './components/Header'
import Board from './components/Board'
import Coulmn from './components/Coulmn';
import AddTaskModal from './components/AddTaskModal';
import { useState } from 'react';

const App = () => {

  const [model, setModel] = useState(false);
  const [tasks, setTasks] = useState([])
  const [editingTask, setEditingTask] = useState(null)
  

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
    console.log(newTask);
      const taskWithId = {
  ...newTask,
  id: Date.now() + Math.random()
}

      setTasks([...tasks,taskWithId])
  }
  const onDelete = (id)=>{
    setTasks(()=>{
      return tasks.filter((task)=>{
        return task.id !== id;
      })
    })
  }

  const onEdit = (task)=>{
     setEditingTask(task)
     setModel(true);
  }

  return (
    <div>
      <Header onAddTask={handleModel} />
      {model && <AddTaskModal onAddTask={handleonAddTask}  onClose={handleCloseModel} editingTask={editingTask} />}
       <Board onEdit={onEdit} onDelete={onDelete} tasks={tasks} />
    </div>
  )
}

export default App
