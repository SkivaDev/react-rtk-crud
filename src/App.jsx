import reactLogo from './assets/react.svg'
// import './App.css'
import { useSelector } from 'react-redux'
import TaskForm from './components/task-form/TaskForm';
import TaskList from './components/task-list/TaskList';



function App() {

  const tasksState = useSelector(state => state.tasks);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default App
