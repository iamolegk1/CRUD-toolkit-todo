import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { tasks: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.tasks.push({
        id: nanoid(),
        text: action.payload,
        status: false,
      });
    },
    deleteTodo(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTodo(state, action) {
      const task = state.tasks.find((item) => item.id === action.payload);
      task.status = !task.status;
    },
  },
});

const { actions, reducer } = todoSlice;
export default reducer;
export const { addTodo, deleteTodo, toggleTodo } = actions;
