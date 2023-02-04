import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
// import './App.css'
// import { useSelector } from 'react-redux'
import TaskForm from './components/task-form/TaskForm';
import TaskList from './components/task-list/TaskList';

function App() {

  // const tasksState = useSelector(state => state.tasks);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList/>}/>
          <Route path='/create-task' element={<TaskForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
