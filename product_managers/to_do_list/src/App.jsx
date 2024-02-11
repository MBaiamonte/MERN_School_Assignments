import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import DisplayTask from './components/DisplayTasks'

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <>
      <TaskForm setTaskList={setTaskList} taskList={taskList}/>
      <DisplayTask taskList={taskList} setTaskList={setTaskList}/>
    </>
  )
}

export default App
