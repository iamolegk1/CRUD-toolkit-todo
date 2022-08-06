const AddTask = ({ data, setData, handleClick }) => {
  return (
    <label htmlFor="exampleText0" className="form-label flex gap-2">
      <input
        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none
      "
        type="text"
        placeholder="Еnter task"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleClick}
      >
        Add
      </button>
    </label>
  );
};

export default AddTask;
