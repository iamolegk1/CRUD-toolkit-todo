import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useFetch from "../hooks/useFetch";

const baseHttps = "https://dummyjson.com/todos";

export const fetchTodo = createAsyncThunk("todo/fetchTodo", async () => {
  const { request } = useFetch();
  const data = await request(`${baseHttps}?limit=7`, "GET");
  console.log(data);
  return data;
});

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (text, { dispatch }) => {
    const { request } = useFetch();
    const data = await request(
      `${baseHttps}/add`,
      "POST",
      { "Content-Type": "application/json" },
      JSON.stringify({
        todo: text,
        completed: false,
        userId: 5,
      })
    );
    dispatch(addTask(data));
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  (id, { dispatch }) => {
    const { request } = useFetch();

    request(`${baseHttps}/${id}`, "DELETE");

    dispatch(removeTask(id));
  }
);

export const toggleCompleted = createAsyncThunk(
  "todo/toggleCompleted",
  (id, { dispatch, getState }) => {
    const { request } = useFetch();

    const task = getState().todo.tasks.find((task) => task.id === id);

    request(
      `${baseHttps}/${id}`,
      "PUT",
      { "Content-Type": "application/json" },
      JSON.stringify({
        completed: !task.completed,
      })
    );
    dispatch(toggleTask(id));
  }
);

const initialState = { tasks: [], tasksLoadingStatus: "idle" };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTask(state, action) {
      const task = state.tasks.find((item) => item.id === action.payload);
      task.completed = !task.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.tasksLoadingStatus = "loading";
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.tasksLoadingStatus = "idle";
        state.tasks = action.payload.todos;
      })
      .addCase(fetchTodo.rejected, (state) => {
        state.tasksLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = todoSlice;
export default reducer;
const { addTask, removeTask, toggleTask } = actions;
