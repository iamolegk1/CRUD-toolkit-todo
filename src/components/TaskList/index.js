import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
