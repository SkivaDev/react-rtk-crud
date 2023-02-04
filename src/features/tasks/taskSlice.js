import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false
  },
]


export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const newTasks = [...state, action.payload];
      return newTasks;
    },
    deleteTask: (state, action) => {
      const newTasks = state.filter(task => task.id !== action.payload);
      return newTasks;
    }
  }
})

export const { addTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer