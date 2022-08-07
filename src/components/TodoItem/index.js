import { useDispatch } from "react-redux";
import { toggleCompleted, deleteTodo } from "../../Slice/todoSlice";
const TodoItem = ({ id, todo, completed }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex px-3 py-3 border-b border-gray-200 w-full min-h-0">
      <div
        className={`w-11/12 min-h-full w-11/12 break-words text-lg
      ${completed ? "line-through" : null}
      `}
      >
        {todo}
      </div>
      <div className="flex flex-col justify-center gap-5 w-1/12">
        <div
          className="cursor-pointer hover:brightness-75"
          onClick={() => dispatch(deleteTodo(id))}
        >
          <img src="/close.svg" alt="close" />
        </div>
        <input
          type="checkbox"
          className="cursor-pointer border-gray-300 rounded h-6 w-6 mx-auto"
          checked={completed}
          onChange={() => dispatch(toggleCompleted(id))}
        />
      </div>
    </li>
  );
};

export default TodoItem;
