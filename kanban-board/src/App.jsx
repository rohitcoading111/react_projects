import React from 'react'
import Header from './components/Header'
import Board from './components/Board'
import Coulmn from './components/Coulmn';

const App = () => {

  const [model, setModel] = useState(false);
  const [task, setTask] = useState([])

  const handleModel = () => {
    if (model === false){
      setModel(true)
    }
  }

  return (
    <div>
      <Header onAddTask={handleModel} />
       <Board />
    </div>
  )
}

export default App
