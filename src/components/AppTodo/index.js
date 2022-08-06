import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../Slice/todoSlice";
import AddTask from "../AddTask";
import TaskList from "../TaskList";

const App = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!data) return;
    dispatch(addTodo(data));
    setData("");
  };

  return (
    <div className="App">
      <AddTask data={data} setData={setData} handleClick={handleClick} />
      <TaskList />
    </div>
  );
};

export default App;
