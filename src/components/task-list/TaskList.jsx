import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../features/tasks/taskSlice";
import { Link } from "react-router-dom";
function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center mb-7">
        <h1 className="text-4xl">Total Tasks {tasks.length}</h1>
        <Link
          to={"/create-task"}
          className="bg-indigo-600 px-2 py-1 rounded-md flex items-center"
        >
          CREATE NEW TASK
        </Link>
      </header>

      <div className="w-full grid grid-cols-3 gap-8">
        {tasks.map((task) => (
          <div key={task.id} className='bg-zinc-800 p-6 rounded-lg box-border'>
            <div className="flex justify-between items-center">
              <h3>{task.title}</h3>
              <div className="flex gap-3 ">
                <Link className="bg-zinc-700 p-1 rounded-md text-xs" to={`/edit-task/${task.id}`}>
                  EDIT
                  </Link>
                <button 
                onClick={() => handleDelete(task.id)} 
                className='bg-red-500 p-1 rounded-md text-xs'>
                  DELETE
                </button>
              </div>
            </div>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
