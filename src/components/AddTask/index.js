const AddTask = ({ data, setData, handleClick }) => {
  return (
    <label>
      <input
        placeholder="Еnter task"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </label>
  );
};

export default AddTask;
