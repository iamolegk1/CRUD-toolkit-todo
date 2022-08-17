import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, fetchTodo } from "../../Slice/todoSlice";
import AddTask from "../AddTask";
import TaskList from "../TaskList";

import { Skeleton } from "../../styles/Skeleton";

const App = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const { tasksLoadingStatus } = useSelector((state) => state.todo);

  const addNewTask = () => {
    if (!data) return;
    dispatch(addTodo(data));
    setData("");
  };

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div className="flex flex-col flex-wrap justify-center items-center w-full mt-20">
      <AddTask data={data} setData={setData} addNewTask={addNewTask} />
      {tasksLoadingStatus === "loading" ? <Skeleton /> : null}
      {tasksLoadingStatus === "error" && (
        <img width="500px" height="500px" src="/error.svg" alt="error" />
      )}
      <TaskList />
    </div>
  );
};

export default App;
