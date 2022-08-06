import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../Slice/todoSlice";

const TodoItem = ({ id, text, status }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={status}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <div>{text}</div>
      <div onClick={() => dispatch(deleteTodo(id))}>✖</div>
    </li>
  );
};

export default TodoItem;
