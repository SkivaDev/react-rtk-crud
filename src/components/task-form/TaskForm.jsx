import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, editTask } from '../../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'

function TaskForm() {

  const [task, setTask] = useState({
    title: "",
    description: "",
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state => state.tasks)

  useEffect(() => {
    if(params.id) {
      setTask(
        tasks.find(task => task.id === params.id)
      )
    }
  }, [params.id, tasks])
  

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(params.id) {
      dispatch(editTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id: uuid(),
      }));
    }
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit} className='box-border flex flex-col p-4 bg-zinc-800 gap-5'>
      <div className='flex flex-col gap-2'>
      <h1>Title</h1>
      <input 
      name='title'
      type="text" 
      placeholder='new task' 
      onChange={handleChange}
      value={task.title}
      className='bg-zinc-600 p-1'
      />
      </div>

      <div className='flex flex-col gap-2'>
        <h2>Description</h2>
      <textarea 
      name="description" 
      placeholder='this is a...' 
      onChange={handleChange}
      value={task.description}
      className='bg-zinc-600'
      >
      </textarea>
      </div>

      <button className='bg-indigo-700 rounded-md'>Save</button>
    </form>
  )
}

export default TaskForm