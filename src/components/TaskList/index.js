import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  if (tasks.length !== 0) {
    return (
      <ul className="mt-3 bg-white rounded-lg border border-gray-200 w-96 text-gray-900 min-h-0">
        {tasks.map((task) => (
          <TodoItem key={task.id} {...task} />
        ))}
      </ul>
    );
  }
};

export default TaskList;
