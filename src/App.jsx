import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
// import './App.css'
// import { useSelector } from 'react-redux'
import TaskForm from './components/task-form/TaskForm';
import TaskList from './components/task-list/TaskList';

function App() {

  // const tasksState = useSelector(state => state.tasks);

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaskList/>}/>
            <Route path='/create-task' element={<TaskForm/>}/>
            <Route path='/edit-task/:id' element={<TaskForm/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
